const Joi = require('joi');

module.exports.registerBodySchema = (req, res, next) => {
  const registerBodySchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(6).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] }
      })
      .required()
  })
    .required()
    .min(3)
    .max(3);
  const { error } = registerBodySchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');

    return res.status(400).send(msg);
  }
  next();
};

module.exports.loginSchema = (req, res, next) => {
  const loginSchema = Joi.object({
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] }
      })
      .required(),
    password: Joi.string().min(6).max(30).required()
  })
    .required()
    .min(2)
    .max(2);
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');

    return res.status(400).json({ msg });
  }
  next();
};
module.exports.orderSchema = (req, res, next) => {
  const orderSchema = Joi.object({
    type: Joi.string().required(),
    item: Joi.string().required(),
    name: Joi.string().required(),
    comments: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.number().required(),
    qty: Joi.number().required()
  }).required();

  const { error } = orderSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(',');

    return res.status(400).json({ msg });
  }
  next();
};
