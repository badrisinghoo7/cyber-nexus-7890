const mongoose = require("mongoose");

const socialscienceSchema = mongoose.Schema(
  {
    subjectName: String,
    description: String,
    image: String,
  },
  {
    versionKey: false,
  }
);

const SocialscienceModel = mongoose.model("socialscience", socialscienceSchema);

module.exports = {
  SocialscienceModel,
};
