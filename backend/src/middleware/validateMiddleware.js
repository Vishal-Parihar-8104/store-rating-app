const { body, validationResult } = require("express-validator");

exports.validateUser = [
  body("name").isLength({ min: 20, max: 60 }),
  body("address").isLength({ max: 400 }),
  body("password").isStrongPassword({ minLength: 8, minUppercase: 1, minSymbols: 1 }),
  body("email").isEmail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];
