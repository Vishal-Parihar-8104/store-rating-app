const router = require("express").Router();
const passport = require("passport");
const { submitRating } = require("../controllers/ratingController");

router.post("/", passport.authenticate("jwt", { session: false }), submitRating);

module.exports = router;
