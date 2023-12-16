const mongoose = require("mongoose");

const scienceSchema = mongoose.Schema(
  {
    subjectName: String,
    description: String,
    image: String,
  },
  {
    versionKey: false,
  }
);

const ScienceModel = mongoose.model("science", scienceSchema);

module.exports = {
  ScienceModel,
};
