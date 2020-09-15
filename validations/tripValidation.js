const Joi = require('joi')

const tripValidation = data => {
    const schema = Joi.object({
        post: Joi.string()
            .min(1)
            .max(3000)
            .required(),
        location: Joi.string()
            .min(2)
            .max(255)
            .default("Somewhere, USA")
            .required(),
        image: Joi.object(),
        owner_id: Joi.string()
            .required()
    });
    return schema.validate(data)
}


module.exports = {
    tripValidation
}