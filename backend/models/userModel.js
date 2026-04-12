const mongoose = require("mongoose");

/**
 * Shared Mongoose schema for cohort student applications.
 * Used only as a definition — the compiled model is {@link CohortEight} in
 * `models/cohorts/cohort.eight.js`. Do not register a second model from this file.
 */
const cohortStudentApplicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    dob: {
      type: String,
      required: [true, "Date of birth is required"],
      trim: true,
    },
    courseSelected: {
      type: String,
      required: [true, "Course selection is required"],
      trim: true,
    },
    classType: {
      type: String,
      required: [true, "Class type is required"],
      trim: true,
      enum: {
        values: ["Physical", "Virtual"],
        message: "Please select a valid class type",
      },
    },
    stateOfOrigin: {
      type: String,
      required: [true, "State of origin is required"],
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      trim: true,
      enum: {
        values: ["Male", "Female", "Other", "Prefer Not To Mention"],
        message: "Please select a valid gender",
      },
    },
    phoneNo: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [
        /^(\+234|234|0)?[789][01]\d{8}$/,
        "Please enter a valid Nigerian phone number",
      ],
    },
    emailAddress: {
      type: String,
      required: [true, "Email address is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
      ],
    },
    codeExperience: {
      type: String,
      required: [true, "Code experience is required"],
      trim: true,
      enum: {
        values: ["Beginner", "Intermediate", "Advanced", "Expert"],
        message: "Please select a valid experience level",
      },
    },
    stateOfResidence: {
      type: String,
      required: [true, "State of residence is required"],
      trim: true,
    },
    status: {
      type: String,
      default: "Not Paid",
      enum: {
        values: ["Not Paid", "Paid", "Pending", "Cancelled", "Accepted"],
        message: "Please select a valid status",
      },
    },
  },
  {
    timestamps: true,
  }
);

cohortStudentApplicationSchema.index({ emailAddress: 1 });
cohortStudentApplicationSchema.index({ status: 1 });
cohortStudentApplicationSchema.index({ courseSelected: 1 });
cohortStudentApplicationSchema.index({ createdAt: -1 });

module.exports = cohortStudentApplicationSchema;
