exports.success = (res, message, data = {}) => {
  return res.json({ success: true, message, data });
};

exports.error = (res, message, code = 500) => {
  return res.status(code).json({ success: false, message });
};
