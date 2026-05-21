const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    company: {
      type: String,
      trim: true,
      default: "",
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },
    eventName: {
      type: String,
      required: [true, "Event name is required"],
      trim: true,
      maxlength: [200, "Event name cannot exceed 200 characters"],
    },
    eventCategory: {
      type: String,
      required: [true, "Event category is required"],
      trim: true,
    },
    eventType: {
      type: String,
      required: [true, "Event type is required"],
      trim: true,
    },
    startDate: {
      type: String,
      required: [true, "Start date is required"],
      trim: true,
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
    },
    eventRegLink: {
      type: String,
      trim: true,
      default: "",
    },
    eventVenue: {
      type: String,
      required: [true, "Event venue is required"],
      trim: true,
    },
    media: {
      type: String,
      trim: true,
      default: "",
    },
    poster: {
      type: String,
      trim: true,
      default: "",
    },
    eventDescription: {
      type: String,
      required: [true, "Event description is required"],
      trim: true,
      maxlength: [5000, "Description cannot exceed 5000 characters"],
    },
  },
  {
    timestamps: true,
  }
);

eventSchema.index({ startDate: -1 });
eventSchema.index({ eventCategory: 1 });
eventSchema.index({ company: 1 });
eventSchema.index({ createdAt: -1 });

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
