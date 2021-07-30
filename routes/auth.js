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
    const user = await User.findById(req.user._id);
    console.log('get route');
    res.json(user);
  } catch (e) {
    console.log(err.message);
    res.status(500).json({ msg: 'server error' });
  }
});
// @Route post api/auth
// @desc   check auth of loged in user
// @access  public

router.post('/', loginSchema, async (req, res) => {
  const { email, password } = req.body;
  console.log('post route');
  try {
    let user = await User.findOne({ email }).select('+password');
    console.log(user);
    if (!user) {
      return res.status(400).json({ msg: 'invalid credintals' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'password is wrong' });
    }

    req.session.user = user;
    res.redirect('/api/auth');
  } catch (e) {
    console.log(e);
    res.status(500).send('Server Error');
  }
});
router.post('/logout', isAuth, (req, res) => {
  console.log(req.session);
  req.session.user = null;
  console.log(req.session);
  res.end();
});

module.exports = router;
