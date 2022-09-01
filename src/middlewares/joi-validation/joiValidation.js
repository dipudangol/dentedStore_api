import Joi from "joi";
import { ADDRESS, DATE, EMAIL, FNAME, LNAME, LONGSTR, NUMBER, PASSWORD, PHONE, SHORTSTR, STATUS, validator } from "../constant.js";

export const newAdminUserValidation = (req, res, next) => {
    //define rule
    const schema = Joi.object({
        fName: FNAME.required(),
        lName: LNAME.required(),
        email: EMAIL.required(),
        password: PASSWORD.required(),
        confirmPassword: PASSWORD,
        phone: PHONE,
        address: ADDRESS,
        dob: DATE.allow("", null),
    });

    //implement value to schema
    validator(schema, req, res, next);
}


export const emailVerificationValidation = (req, res, next) => {
    //define rule
    const schema = Joi.object({
        email: EMAIL.required(),
        emailValidationCode: SHORTSTR.required(),
    })
    validator(schema, req, res, next);
}


export const loginValidation = (req, res, next) => {
    //define rule
    const schema = Joi.object({
        email: EMAIL.required(),
        password: PASSWORD.required(),
    })
    validator(schema, req, res, next);
}


//ServeSide category validation=============================
export const newCategoryValidation = (req, res, next) => {
    req.body.parentId = req.body.parentId ? req.body.parentId : null;
    //define rule
    const schema = Joi.object({
        status: STATUS,
        name: SHORTSTR.required(),
        parentId: SHORTSTR.allow(null, ""),
        slug: SHORTSTR,
    })
    validator(schema, req, res, next);
}



export const updateCategoryValidation = (req, res, next) => {
    req.body.parentId = req.body.parentId ? req.body.parentId : null;
    const schema = Joi.object({
        status: STATUS,
        name: SHORTSTR.required(),
        parentId: SHORTSTR.allow(null, ""),
        _id: SHORTSTR.required(),
    })
    validator(schema, req, res, next);
}



// =====payment method validation
export const newPaymentMethodValidation = (req, res, next) => {
    const schema = Joi.object({
        status: STATUS,
        name: SHORTSTR.required(),
        description: SHORTSTR.required(),
    })
    validator(schema, req, res, next);
}


// =====payment method validation
export const updatePaymentMethodValidation = (req, res, next) => {
    const schema = Joi.object({
        _id: SHORTSTR.required(),
        status: STATUS.required(),
        name: SHORTSTR.required(),
        description: SHORTSTR.required(),
    })
    validator(schema, req, res, next);
}


// ===============product method validation
export const newProductValidation = (req, res, next) => {

    const schema = Joi.object({
        name: SHORTSTR.required(),
        sku: SHORTSTR.required(),
        description: LONGSTR.required(),
        qty: NUMBER.required(),
        price: NUMBER.required(),
        salesPrice: NUMBER,
        salesStartDate: DATE.allow(null),
        salesEndDate: DATE.allow(null),
        catId: SHORTSTR.required(),
    })
    validator(schema, req, res, next);

}
