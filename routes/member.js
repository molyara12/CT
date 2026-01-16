const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const admin = require("../middlewares/admin.middleware");
const member = require("../controllers/member.controller");

router.get("/", auth, admin, member.getAllMembers);
router.get("/search", auth, admin, member.searchMember);
router.get("/:id", auth, admin, member.getMemberById);
router.get("/me/profile", auth, member.getMyProfile);
router.put("/:id/status", auth, admin, member.updateMemberStatus);

module.exports = router;
