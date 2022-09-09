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

//updatinf admin user validattion
export const updateAdminUserValidation = (req, res, next) => {
    //define rule
    const schema = Joi.object({
        _id: SHORTSTR.required(),
        fName: FNAME.required(),
        lName: LNAME.required(),
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
    const { salesEndDate, salesPrice, salesStartDate } = req.body;

    req.body.salesPrice = salesPrice ? salesPrice : 0;
    req.body.salesStartDate = !salesStartDate || salesStartDate === 'null' ? null : salesStartDate;
    req.body.salesEndDate = !salesEndDate || salesEndDate === 'null' ? null : salesEndDate;

    const schema = Joi.object({
        status: STATUS.required(),
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



// ===============product method validation
export const updateProductValidation = (req, res, next) => {
    const { salesEndDate, salesPrice, salesStartDate,imgToDelete } = req.body;

    req.body.salesPrice = salesPrice ? salesPrice : 0;
    req.body.salesStartDate = !salesStartDate || salesStartDate === 'null' ? null : salesStartDate;
    req.body.salesEndDate = !salesEndDate || salesEndDate === 'null' ? null : salesEndDate;
    req.body.imgToDelete = !imgToDelete || imgToDelete === 'null' ? "null" : imgToDelete;

    const schema = Joi.object({
        _id: SHORTSTR.required(),
        status: STATUS.required(),
        name: SHORTSTR.required(),
        description: LONGSTR.required(),
        qty: NUMBER.required(),
        price: NUMBER.required(),
        salesPrice: NUMBER,
        salesStartDate: DATE.allow(null),
        salesEndDate: DATE.allow(null),
        catId: SHORTSTR.required(),
        images: LONGSTR.required(),
        thumbnail: LONGSTR.required(),
        imgToDelete: LONGSTR,
    })
    validator(schema, req, res, next);

}