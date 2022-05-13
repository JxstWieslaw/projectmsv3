const Joi = require("@hapi/joi");

const getuservalidation = (data) => {
  const schema = Joi.object().keys({
    userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required() })  
  return schema.validate(data);
};

module.exports.getuservalidation = getuservalidation;
