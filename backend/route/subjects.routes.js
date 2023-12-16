const express = require("express");
const { MathsModel } = require("../model/maths.model");
const { PhysicsModel } = require("../model/physics.model");
const { EnglishModel } = require("../model/english.model");
const { ScienceModel } = require("../model/science.model");
const { SocialscienceModel } = require("../model/socialscience.model");

const { Router } = express;

const subjectsRouter = Router();

subjectsRouter.get("/maths", async (req, res) => {
  try {
    let { search, category } = req.query;
    let filter = {};
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (category) {
      filter.category = category;
    }

    const data = await MathsModel.find(filter);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

subjectsRouter.get("/physics", async (req, res) => {
  try {
    let { search, category } = req.query;
    let filter = {};
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }
    if (category) {
      filter.category = category;
    }

    const data = await PhysicsModel.find(filter);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});
// subjectsRouter.get("/english", async (req, res) => {
//   try {
//     let { search, category } = req.query;
//     let filter = {};
//     if (search) {
//       filter.$or = [
//         { title: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } },
//       ];
//     }
//     if (category) {
//       filter.category = category;
//     }

//     const data = await EnglishModel.find(filter);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ err: err.message });
//   }
// });

// subjectsRouter.get("/science", async (req, res) => {
//   try {
//     let { search, category } = req.query;
//     let filter = {};
//     if (search) {
//       filter.$or = [
//         { title: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } },
//       ];
//     }
//     if (category) {
//       filter.category = category;
//     }

//     const data = await ScienceModel.find(filter);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ err: err.message });
//   }
// });
// subjectsRouter.get("/socialscience", async (req, res) => {
//   try {
//     let { search, category } = req.query;
//     let filter = {};
//     if (search) {
//       filter.$or = [
//         { title: { $regex: search, $options: "i" } },
//         { description: { $regex: search, $options: "i" } },
//       ];
//     }
//     if (category) {
//       filter.category = category;
//     }

//     const data = await SocialscienceModel.find(filter);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json({ err: err.message });
//   }
// });
