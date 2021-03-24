const app = require("express").Router();
const Workout = require("../models/workout.js");
const mongoose = require("mongoose");

app.get("/api/workouts", (req, res) => {
  Workout.find({
    
  })
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.put("/api/workouts/:id", (req, res) => {
  console.log("id", req.params.id);
  Workout.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $push: { exercises: req.body },
    }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = app;
