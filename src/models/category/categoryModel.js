import CategorySchema from "./categorySchema.js";

//Insert Catrgories
export const insertCategory = (obj) => {
    return CategorySchema(obj).save();
}

//get categories
export const getAllCategory = () => {
    return CategorySchema.find();
}

//get one categories
export const getCategoryById = (_id) => {
    return CategorySchema.findById(_id);
}