const Member = require("../models/Member.models");

// Admin: Get all members
exports.getAllMembers = async (req, res) => {
  const members = await Member.find().populate("userId", "name email");
  res.json(members);
};

// Admin: Get member by ID
exports.getMemberById = async (req, res) => {
  const member = await Member.findById(req.params.id).populate("userId");
  res.json(member);
};

// User: My profile
exports.getMyProfile = async (req, res) => {
  const member = await Member.findOne({ userId: req.user._id });
  res.json(member);
};

// Admin: Update member status
exports.updateMemberStatus = async (req, res) => {
  const { isActive } = req.body;
  const member = await Member.findByIdAndUpdate(
    req.params.id,
    { isActive },
    { new: true }
  );
  res.json(member);
};

// Admin: Search member
exports.searchMember = async (req, res) => {
  const { name, type } = req.query;

  const query = {};
  if (type) query.membershipType = type;

  const members = await Member.find(query).populate({
    path: "userId",
    match: name ? { name: { $regex: name, $options: "i" } } : {}
  });

  res.json(members.filter(m => m.userId));
};
