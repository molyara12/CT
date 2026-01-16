const User = require("../models/User.models");

/**
 * @desc    Get logged in user profile
 * @route   GET /api/users/me
 * @access  Private
 */
exports.getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Update my profile
 * @route   PUT /api/users/me
 * @access  Private
 */
exports.updateMyProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = name || user.name;
    user.email = email || user.email;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * @desc    Admin: Get all users
 * @route   GET /api/users
 * @access  Admin
 */
exports.getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

/**
 * @desc    Admin: Get user by ID
 * @route   GET /api/users/:id
 * @access  Admin
 */
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  res.json(user);
};
