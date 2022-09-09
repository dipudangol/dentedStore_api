import express from 'express';
import { newProductValidation, updateProductValidation } from '../middlewares/joi-validation/joiValidation.js';
import { addProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from '../models/product/ProductModel.js';
import slugify from "slugify";
import multer from 'multer';
import fs from "fs";
import path from 'path';

const router = express.Router();

//setup multer for validation
const fileUploadDestination = "public/img/products"
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let error = null
        //validation test if needed
        cb(error, fileUploadDestination);
    },
    filename: (req, file, cb) => {
        const fullFileName = Date.now() + "-" + file.originalname;
        cb(null, fullFileName);
    },
})
const upload = multer({ storage });


router.get("/:_id?", async (req, res, next) => {
    try {
        const { _id } = req.params;
        const products = _id ? await getProductById(_id) : await getAllProducts();
        res.json({
            status: "success",
            message: "todo get method",
            products,
        })

    } catch (error) {
        next(error);
    }
});



router.post("/", upload.array('images'), newProductValidation, async (req, res, next) => {
    try {
        if (req.files.length) {

            const images = req.files.map(img => img.path.slice(6));
            console.log(images);
            req.body.images = images;
            req.body.thumbnail = images[0];
        }
        const sluge = slugify(req.body.name, { lower: true, trim: true })
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
        if (error.message.includes("E11000 duplicate key error collection")) {
            error.message = "This product has already been added"
            // error.status = 200
        }
        // error.status = 500
        next(error)

    }
});



router.put("/", upload.array('newImages'), updateProductValidation, async (req, res, next) => {
    try {
        // console.log(req.body);
        const { body, files } = req;
        let { images, imgToDelete } = body;
        images = images.split(",");
        imgToDelete = imgToDelete.split(",");
        images = images.filter((img) => !imgToDelete.includes(img));
        console.log(images, "from to delete");

        if (files) {
            const newImgs = files.map((imgObj) => imgObj.path.slice(6))
            images = [...images, ...newImgs];
        }

        body.images = images;
        console.log(body.images)
        const product = await updateProductById(body);
        product?.id ?
            res.json({
                status: "success",
                message: "Product is updated"
            }) :
            res.json({
                status: "error",
                message: "Error is ",

            })

    } catch (error) {
        error.status = 500;
        next(error);
    }
});



router.delete("/:_id", async (req, res, next) => {
    try {
        // deleting image from disk not for getProductsAction
        const { _id } = req.params;
        const imgToDelete = req.body;
        console.log(_id, req.body, "from router page");
        const product = await deleteProductById(_id);
        if (imgToDelete.lengeth) {
            const arg = imgToDelete.split(",")
            console.log(arg)
            arg.map((item) => item && fs.unlinkSync(path.join("./public", item)));
        }
        product?._id ? res.json({
            status: "success",
            message: "Successfully deleted",
        })
            : res.json({
                status: "error",
                message: "error, unable to delete product",
            })

    } catch (error) {
        error.status = 500;
        next(error)

    }
})

export default router;