const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
