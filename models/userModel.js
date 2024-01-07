const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 50,
  },
  mobilenumber: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  gender: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
