import express from 'express';
import { newPaymentMethodValidation, updatePaymentMethodValidation } from '../middlewares/joi-validation/joiValidation.js';
import { deletePaymentMethodById, getPaymentMethods, insertPaymentMethod, updatePaymentMethodById } from '../models/payment-method/PaymentMethodModel.js';

const router = express.Router();


router.get("/", async (req, res, next) => {
    try {
        const pm = await getPaymentMethods();
        res.json({
            status: "success",
            message: "todo",
            pm
        })
    } catch (error) {
        error.status = 500
        next(error)
    }
})


//route to add payment methods
router.post("/", newPaymentMethodValidation, async (req, res, next) => {
    try {
        const pm = await insertPaymentMethod(req.body);
        pm?._id ? res.json({
            status: "success",
            message: "todo post method"
        }) : res.json({
            status: "error",
            message: "error found"
        })

    } catch (error) {
        if (error.message.includes("E11000 duplicate key error collection")) {
            error.message = "This payment has already been added"
            error.status = 200
        }
        error.status = 500
        next(error)
    }
})


//router to update payment methods
router.put("/", updatePaymentMethodValidation, async (req, res, next) => {
    try {
        const pm = await updatePaymentMethodById(req.body);
        pm?._id ? res.json({
            status: "success",
            message: "The paymenr has been updated"
        }) : res.json({
            status: "error",
            message: "error unable to update payment method, try again"
        })

    } catch (error) {
        if (error.message.includes("E11000 duplicate key error collection")) {
            error.message = "This payment has already been added"
            error.status = 200
        }
        error.status = 500
        next(error)
    }
})
//router to delete payment methods
router.delete("/:_id", async (req, res, next) => {
    try {
        const { _id } = req.params;
        const pm = await deletePaymentMethodById(_id);

        pm?._id ? res.json({
            status: "success",
            message: "The paymenr has been deleted"
        }) : res.json({
            status: "error",
            message: "error unable to delete payment method, try again"
        })

    } catch (error) {

        error.status = 500
        next(error)
    }
})



export default router;