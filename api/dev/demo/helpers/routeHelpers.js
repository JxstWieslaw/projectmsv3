const Joi = require('@hapi/joi')

module.exports = {
    validateParam : (schema, name) =>{
        return (req, res, next)=>{
        console.log(req.params)
        const result = schema.validate(req.params);
        console.log(result)
        if(result.error){
            return res.status(400).json(result.error)
        }else{
            if(!req.value)
            req.value ={};

            if(!req.value['params'])
            req.value['params'] = {};

            req.value['params'][name] = result.value.param;
            next();
        }
        }
    },

    schemas: {
        idSchemas: Joi.object().keys({
            userId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required
        })
    }
}

// const Joi = require('@hapi/joi');

// const schema = Joi.object({
//     name:Joi.string().min(6).required(),
//     email:Joi.string().min(6).required().email(),
//     password:Joi.string().min(6).required()
// });

// router.post('/register',  (req, res) => {

//     // VALIDATE BEFORE SAVING A USER 
//     const Validation = schema.validate(req.body);
//     res.send(Validation);

    
// })