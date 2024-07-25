const User = require('../models/User');

exports.createUser = async (req, res) => {
  const { name } = req.body;
  const user = new User({ name });
  await user.save();
  res.status(201).send(user);
};
