import express from 'express';
import { newCategoryValidation } from '../middlewares/joi-validation/joiValidation.js';
import { insertCategory } from '../models/category/categoryModel.js';
import slugify from "slugify";
const router = express.Router();


//insert new categories
router.post("/", newCategoryValidation, async (req, res, next) => {
    try {
        console.log(req.body);
        req.body.slug = slugify(req.body.name, {
            lower: true,
            trim: true,
        });
        const result = await insertCategory(req.body);

        result?.id
            ? res.json({
                status: "success",
                message: "New Categories has been added!"
            })
            : res.json({
                status: "error",
                message: "Unable to add the categories, please try again"
            });

        res.json
            ({
                status: "success",
                message: "categories added!",

            })


    } catch (error) {
        next(error)
    }
})

export default router;