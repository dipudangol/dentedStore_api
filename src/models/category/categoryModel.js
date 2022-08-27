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

//Update one categories
export const updateCategoryById = ({ _id, ...update }) => {
    return CategorySchema.findByIdAndUpdate(_id, update, { new: true });
}

//check child categories
export const hasChildCategoryById = async (parentId) => {
    const cat = await CategorySchema.findOne({ parentId });
    return cat?._id ? true : false;
}


//Delete a category
export const deleteCategoryById = (_id) => {
    return CategorySchema.findByIdAndDelete(_id);
  };