const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll({ attributes: ["id", "name", "email", "address", "role"] });
  res.json(users);
};

exports.updatePassword = async (req, res) => {
  try {
    const { password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    await User.update({ password: hashed }, { where: { id: req.user.id } });
    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
