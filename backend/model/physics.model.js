const mongoose = require("mongoose");

const physicsSchema = mongoose.Schema(
  {
    subjectName: String,
    description: String,
    image: String,
  },
  {
    versionKey: false,
  }
);

const PhysicsModel = mongoose.model("physic", physicsSchema);

module.exports = {
    PhysicsModel,
};


