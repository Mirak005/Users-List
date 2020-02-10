const { check, validationResult } = require("express-validator");

//validate add User
exports.validationUser = () => [
  check("name", "Name is Required ").notEmpty(),
  check("lastName", "Last Name is Required ").notEmpty(),
  check("birthYear", "Birth Year is Required ").notEmpty(),
  check("birthLocation", "Birth Location is Required ").notEmpty()
];

//validate add Photo
exports.validationPhoto = () => [
  check("title", "Title is Required ").notEmpty(),
  check("path", "Image Link is Required ").notEmpty()
];

exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ message: errors.array()[0].msg });
  next();
};
