require("dotenv").config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || "supersecret",
  jwtExpires: "7d",
};
