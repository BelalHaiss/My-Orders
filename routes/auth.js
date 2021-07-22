const express = require('express');
const router = express.Router();
const Joi = require('joi');
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { loginSchema } = require('../middlewares/joi');
const { isAuth } = require('../middlewares/auth');
// @Route get api/auth
// @desc   get loged in user
// @access  private

router.get('/', isAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    console.log(user);
    res.json(user);
  } catch (e) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});
// @Route post api/auth
// @desc   check auth of loged in user
// @access  public

router.post('/', loginSchema, async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'invalid credintals' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('password is wrong');
    }

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
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
