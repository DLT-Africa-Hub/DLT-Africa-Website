const mongoose = require("mongoose");
const cohortStudentApplicationSchema = require("../userModel");

/**
 * Cohort student intake model — single compiled model for this schema.
 * `userModel.js` exports the schema only (no duplicate `mongoose.model` call).
 */
const CohortNine = mongoose.model(
  "CohortNine",
  cohortStudentApplicationSchema
);

module.exports = CohortNine;
