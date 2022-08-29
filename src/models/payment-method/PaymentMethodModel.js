import PaymentMethodSchema from "./PaymentMethodSchema.js";

//Insert payment method
export const insertPaymentMethod = (obj) => {
    return PaymentMethodSchema(obj).save();
}

//get all method
export const getPaymentMethods = () => {
    return PaymentMethodSchema.find();
}


//Update one payment method
export const updatePaymentMethodById = ({ _id, ...update }) => {
    return PaymentMethodSchema.findByIdAndUpdate(_id, update, { new: true });
}


//Delete a category
export const deletePaymentMethodById = (_id) => {
    return PaymentMethodSchema.findByIdAndDelete(_id);
};