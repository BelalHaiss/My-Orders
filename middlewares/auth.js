const jwt = require('jsonwebtoken');
const config = require('config');

module.exports.isAuth = (req, res, next) => {
  console.log(req.session);
  try {
    if (req.session.user) {
      req.user = req.session.user;
      next();
    } else {
      res.status(401).end();
    }
  } catch (e) {
    res.status(401).json({ msg: 'request is not valid' });
  }
};
