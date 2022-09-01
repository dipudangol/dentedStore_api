import express from 'express';
import { newProductValidation } from '../middlewares/joi-validation/joiValidation.js';
import { addProduct, getAllProducts } from '../models/product/ProductModel.js';
import slugify from "slugify";


const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const products = await getAllProducts();
        res.json({
            status: "success",
            message: "todo get method",
            products,
        })

    } catch (error) {
        next(error);
    }
});



router.post("/", newProductValidation, async (req, res, next) => {
    try {
        console.log(req.body);
        const sluge = slugify(req.body.name, { lower: true })
        req.body.slug = sluge;
        const result = await addProduct(req.body);
        result?._id
            ? res.json({
                status: "success",
                message: "New porduct has been added"
            })
            : res.json({
                status: "error",
                message: "Unable to add product, please try again!"
            });

    } catch (error) {
        next(error);
    }
});

export default router;