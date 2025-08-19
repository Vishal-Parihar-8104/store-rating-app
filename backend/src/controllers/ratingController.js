const Rating = require("../models/Rating");

exports.submitRating = async (req, res) => {
  try {
    const { storeId, rating } = req.body;
    const existing = await Rating.findOne({ where: { userId: req.user.id, storeId } });

    if (existing) {
      existing.rating = rating;
      await existing.save();
      return res.json({ message: "Rating updated", rating: existing });
    }

    const newRating = await Rating.create({ userId: req.user.id, storeId, rating });
    res.json({ message: "Rating submitted", rating: newRating });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
