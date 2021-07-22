const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { registerBodySchema } = require('../middlewares/joi.js');
// @Route post api/users
// @desc    register page
// @access  public

router.post('/', registerBodySchema, async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'user already exists' });
    }
    user = new User({
      username,
      email,
      password
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const payload = {
      user: {
        id: user.id
      }
    };
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 3600
      },
      (err, token) => {
        if (err) throw err;

        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
