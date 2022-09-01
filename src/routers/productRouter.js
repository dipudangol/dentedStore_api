import express from 'express';
import { addProduct, getAllProducts } from '../models/product/ProductModel.js';

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const products = await getAllProducts();
        res.json({
            status: "success",
            message: "todo ger method",
            products,
        })

    } catch (error) {
        next(error);
    }
});



router.post("/", async (req, res, next) => {
    try {
        console.log(req.body);
        const result = await addProduct(req.body);
        result?._id
            ? res.json({
                status: "success",
                message: "data is posted"
            })
            : res.json({
                status: "error",
                message: "Unable to ad products"
            })

    } catch (error) {
        next(error);
    }
});

export default router;