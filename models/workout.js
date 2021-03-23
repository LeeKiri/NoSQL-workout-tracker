const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  excercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of exercise",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for this exercise",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Enter a time in minutes",
      },
      weight: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;