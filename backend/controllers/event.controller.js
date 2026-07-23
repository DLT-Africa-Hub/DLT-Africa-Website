const asyncHandler = require("express-async-handler");
const Event = require("../models/eventModel");
const {
  parseAllowedPosterVideoUrl,
  fetchTwitterPosterVideo,
} = require("../utils/posterVideoProxy");

const objectIdRegex = /^[0-9a-fA-F]{24}$/;

const validateEventId = (eventId) => {
  if (!eventId || !objectIdRegex.test(eventId)) {
    throw new Error("Invalid event ID format");
  }
};

const validateEventInput = (body, isUpdate = false) => {
  const requiredFields = [
    "company",
    "eventName",
    "eventCategory",
    "eventType",
    "startDate",
    "duration",
    "eventVenue",
    "eventDescription",
  ];

  if (!isUpdate) {
    const missing = requiredFields.filter(
      (field) => !body[field] || (typeof body[field] === "string" && !body[field].trim())
    );
    if (missing.length > 0) {
      throw new Error(`Missing required fields: ${missing.join(", ")}`);
    }
  }
};

const createEvent = asyncHandler(async (req, res) => {
  validateEventInput(req.body);

  const event = await Event.create({
    company: req.body.company.trim(),
    eventName: req.body.eventName.trim(),
    eventCategory: req.body.eventCategory.trim(),
    eventType: req.body.eventType.trim(),
    startDate: req.body.startDate.trim(),
    duration: req.body.duration.trim(),
    eventRegLink: req.body.eventRegLink?.trim() || "",
    eventVenue: req.body.eventVenue.trim(),
    media: req.body.media?.trim() || "",
    poster: req.body.poster?.trim() || "",
    eventDescription: req.body.eventDescription.trim(),
  });

  res.status(201).json({
    success: true,
    message: "Event created successfully",
    data: event,
  });
});

const getAllEvents = asyncHandler(async (req, res) => {
  const {
    company,
    eventCategory,
    eventType,
    limit = 50,
    page = 1,
    sortBy = "startDate",
    sortOrder = "desc",
  } = req.query;

  const query = {};
  if (company) query.company = new RegExp(`^${company.trim()}$`, "i");
  if (eventCategory) query.eventCategory = eventCategory;
  if (eventType) query.eventType = eventType;

  const sort = { [sortBy]: sortOrder === "asc" ? 1 : -1 };
  const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

  const events = await Event.find(query)
    .sort(sort)
    .limit(parseInt(limit, 10))
    .skip(skip)
    .select("-__v");

  const totalEvents = await Event.countDocuments(query);

  res.status(200).json({
    success: true,
    count: events.length,
    totalEvents,
    currentPage: parseInt(page, 10),
    totalPages: Math.ceil(totalEvents / parseInt(limit, 10)),
    data: events,
  });
});

const getEvent = asyncHandler(async (req, res) => {
  validateEventId(req.params.eventId);

  const event = await Event.findById(req.params.eventId).select("-__v");

  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }

  res.status(200).json({
    success: true,
    data: event,
  });
});

const updateEvent = asyncHandler(async (req, res) => {
  validateEventId(req.params.eventId);
  validateEventInput(req.body, true);

  const allowedFields = [
    "company",
    "eventName",
    "eventCategory",
    "eventType",
    "startDate",
    "duration",
    "eventRegLink",
    "eventVenue",
    "media",
    "poster",
    "eventDescription",
  ];

  const updateFields = {};
  for (const field of allowedFields) {
    if (req.body[field] !== undefined) {
      updateFields[field] =
        typeof req.body[field] === "string"
          ? req.body[field].trim()
          : req.body[field];
    }
  }

  if (Object.keys(updateFields).length === 0) {
    res.status(400);
    throw new Error("No valid fields to update");
  }

  const event = await Event.findByIdAndUpdate(req.params.eventId, updateFields, {
    new: true,
    runValidators: true,
  }).select("-__v");

  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }

  res.status(200).json({
    success: true,
    message: "Event updated successfully",
    data: event,
  });
});

const deleteEvent = asyncHandler(async (req, res) => {
  validateEventId(req.params.eventId);

  const event = await Event.findById(req.params.eventId);

  if (!event) {
    res.status(404);
    throw new Error("Event not found");
  }

  await Event.findByIdAndDelete(req.params.eventId);

  res.status(200).json({
    success: true,
    message: "Event deleted successfully",
    data: { id: req.params.eventId, eventName: event.eventName },
  });
});

const proxyPosterVideo = asyncHandler(async (req, res) => {
  let url;
  try {
    url = parseAllowedPosterVideoUrl(req.query.url);
  } catch (err) {
    res.status(400);
    throw err;
  }

  let upstream;
  try {
    upstream = await fetchTwitterPosterVideo(url);
  } catch (err) {
    res.status(err.statusCode || 502);
    throw err;
  }

  const contentType = upstream.headers.get("content-type") || "video/mp4";
  const contentLength = upstream.headers.get("content-length");

  res.setHeader("Content-Type", contentType);
  res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=86400");
  if (contentLength) {
    res.setHeader("Content-Length", contentLength);
  }

  const buffer = Buffer.from(await upstream.arrayBuffer());
  res.send(buffer);
});

module.exports = {
  createEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
  proxyPosterVideo,
};
