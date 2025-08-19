const router = require("express").Router();
const passport = require("passport");
const { getAllUsers, updatePassword } = require("../controllers/userController");

router.get("/", passport.authenticate("jwt", { session: false }), getAllUsers);
router.put("/password", passport.authenticate("jwt", { session: false }), updatePassword);

module.exports = router;
