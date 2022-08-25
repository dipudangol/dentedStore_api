import express from 'express';
import { newCategoryValidation } from '../middlewares/joi-validation/joiValidation.js';
import { getAllCategory, getCategoryById, insertCategory } from '../models/category/categoryModel.js';
import slugify from "slugify";
const router = express.Router();

//get categories
router.get("/:_id?", async (req, res, next) => {
    try {
        const { _id } = req.params;
        const categories = _id
            ? await getCategoryById(_id)
            : await getAllCategory();

        res.json({
            status: "success",
            message: "category list",
            categories,
        });
    } catch (error) {
        error.status = 500
        next(error)
    }
})


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