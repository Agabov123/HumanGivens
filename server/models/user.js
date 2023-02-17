const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, min: 8, max: 16, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  signupDate: {
    type: Date,
    default: () => Date.now(),
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
