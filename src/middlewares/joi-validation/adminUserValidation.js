import Joi from "joi";

export const newAdminUserValidation = (req, res, next) => {
    try {
        //define rule
        const schema = Joi.object({
            fName: Joi.string().max(20).required(),
            lName: Joi.string().max(20).required(),
            email: Joi.string().email({ minDomainSegments: 2 }),
            password: Joi.string().max(200).required(),
            confirmPassword: Joi.string().max(200).required(),
            phone: Joi.string().max(20).required(),
            address: Joi.string().max(100),
            dob: Joi.date(),
        });

        //implement value to schema
        const { error } = schema.validate(req.body);
        if (error) {
            error.status = 200;
            return next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
}


export const emailVerificationValidation = (req, res, next) => {

    try {
        //define rule
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            emailValidationCode: Joi.string().max(100).required(),
        })

        const { error } = schema.validate(req.body);
        if (error) {
            error.status = 200;
            return next(error);
        }
        next();

    } catch (error) {
        next(error)

    }
}


export const loginValidation = (req, res, next) => {

    try {
        //define rule
        const schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            password: Joi.string().max(100).required(),
        })

        const { error } = schema.validate(req.body);
        if (error) {
            error.status = 200;
            return next(error);
        }
        next();

    } catch (error) {
        next(error)

    }
}