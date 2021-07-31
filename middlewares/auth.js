const jwt = require('jsonwebtoken');

module.exports.isAuth = (req, res, next) => {
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
