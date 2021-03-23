const app = require("express");
const Workout = require("../models/workout.js");

app.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

app.put("/api/workouts/id", (req, res) => {
    Workout.insert(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    }) 
    .catch(err => {
        res.status(400).json(err);
    })
})

app.post("/api/workouts", (req, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    }) 
    .catch(err => {
        res.status(400).json(err);
    })
})