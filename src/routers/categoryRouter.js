import express from 'express';
import { newCategoryValidation, updateCategoryValidation } from '../middlewares/joi-validation/joiValidation.js';
import { deleteCategoryById, getAllCategory, getCategoryById, hasChildCategoryById, insertCategory, updateCategoryById } from '../models/category/categoryModel.js';
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


//update categories
router.put("/", updateCategoryValidation, async (req, res, next) => {
    try {
        const hasChildcats = await hasChildCategoryById(req.body._id);
        if (hasChildcats) {
            return res.json({
                status: "error",
                message: "Already has child, can't relocate either delete or reassign"
            })
        }
        const catUpdate = await updateCategoryById(req.body);
        catUpdate?._id ?
            res.json({
                status: "success",
                message: "updated categories",
            }) :
            res.json({
                status: "error",
                message: "unable to update the category, please try again",
            })

    } catch (error) {
        next(error)

    }
})

//to deltet router
router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        const hasChildCats = await hasChildCategoryById(req.params.id);
        if (hasChildCats) {
            return res.json({
                status: "error",
                message:
                    "This category has child categories, pelase delete or re assign them to another category befor taking this action.",
            });
        }

        const catDelete = await deleteCategoryById(id);

        catDelete?._id
            ? res.json({
                status: "success",
                message: "Category has been Deleted.",
            })
            : res.json({
                status: "error",
                message: "Unablel to Delete the category, Please try again later.",
            });

    } catch (error) {
        next(error);

    }

})

export default router;