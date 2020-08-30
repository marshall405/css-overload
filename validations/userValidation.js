const Joi = require('joi')

const registerValidation = data => {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(6)
            .max(255)
            .required(),
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]'))
            .min(6)
            .max(1024)
            .required(),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'edu'] } })
            .required()
    });
    return schema.validate(data)
}


module.exports = {
    registerValidation
}