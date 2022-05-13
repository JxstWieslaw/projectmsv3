const Joi = require("@hapi/joi");

module.exports = {
  validateParam: (schema) => {
    return (req, res, next) => {
      const { error } = schema.validate(req.params);
      if (error) return res.send(error.details[0].message);
      else next();
    };
  },
  
  schemas: {
    idSchema: Joi.object().keys({
      userId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
    }),
  },
};


