const express = require("express");
const router = express.Router();
const {
  login,
  register,
  getAllUsers,
  logOut,
} = require("../controllers/userController");

router.post("/login", login);
router.post("/register", register);
router.get("/allusers", getAllUsers);
router.get("/allusers/:id", getAllUsers);
router.get("/logout/:id", logOut);

module.exports = router;
