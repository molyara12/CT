const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  membershipType: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model("Member", memberSchema);
