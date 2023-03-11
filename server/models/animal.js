const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnimalSchema = new Schema({
  testDate: {
    type: Date,
    default: () => Date.now(),
  },
  answer1: { type: String, required: true },
  answer2: { type: String, required: true },
  answer3: { type: String, required: true },
  answer4: { type: String, required: false },
  answer5: [{ type: String, required: false }],
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;
