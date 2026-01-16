const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth.middleware");
const admin = require("../middlewares/admin.middleware");
const userCtrl = require("../controllers/user.controller");

// My profile
router.get("/me", auth, userCtrl.getMyProfile);

// Update my profile
router.put("/me", auth, userCtrl.updateMyProfile);

// Admin: get all users
router.get("/", auth, admin, userCtrl.getAllUsers);

// Admin: get user by id
router.get("/:id", auth, admin, userCtrl.getUserById);

module.exports = router;
