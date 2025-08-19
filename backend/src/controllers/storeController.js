const Store = require("../models/Store");
const Rating = require("../models/Rating");
const User = require("../models/User");
const { Sequelize } = require("sequelize");

exports.addStore = async (req, res) => {
  try {
    const { name, email, address, ownerId } = req.body;
    const store = await Store.create({ name, email, address, ownerId });
    res.json(store);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.findAll({
      include: [{ model: Rating, attributes: [] }],
      attributes: {
        include: [
          [Sequelize.fn("AVG", Sequelize.col("Ratings.rating")), "averageRating"],
        ],
      },
      group: ["Store.id"],
    });
    res.json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
