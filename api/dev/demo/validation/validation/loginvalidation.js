const Joi = require('@hapi/joi')


const loginvalidation = (data)=>{
    const schema = Joi.object({
        email : Joi.string().lowercase().required().email(),
        password : Joi.string().required(),       
    });
   
    return schema.validate(data)
}

module.exports.loginvalidation = loginvalidation;


