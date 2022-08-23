import CategorySchema from "./categorySchema.js";

//Insert Catrgories
export const insertCategory = (obj) => {
    return CategorySchema(obj).save();
}

