import productSchema from "./productSchema.js"

export const getAllProducts = () => {
    return productSchema.find();
};

export const getProductById = (_id) => {
    return productSchema.findById(_id);
};

//filter should be objects
export const getSelectedProducts = (filter) => {
    return productSchema.find(filter);
};



export const getSingleProduct = (filter) => {
    return productSchema.find(filter);
};


export const addProduct = (obj) => {
    return productSchema(obj).save();
};


export const updateProductById = ({ _id, ...rest }) => {
    return productSchema.findByIdAndUpdate(_id, rest);
};

export const deleteProductById = (_id) => {
    return productSchema.findByIdAndDelete(_id);
};