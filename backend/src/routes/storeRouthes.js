const router = require("express").Router();
const passport = require("passport");
const { addStore, getStores } = require("../controllers/storeController");

router.post("/", passport.authenticate("jwt", { session: false }), addStore);
router.get("/", passport.authenticate("jwt", { session: false }), getStores);

module.exports = router;
