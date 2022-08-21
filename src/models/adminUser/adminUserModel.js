import adminUserSchema from "./adminUserSchema.js";

//insert user
export const insertAdminUser = obj => {
    return adminUserSchema(obj).save();

}


//update user to active, filter should be object
export const updateOneUser = (filter, update) => {
    return adminUserSchema.findOneAndUpdate(filter, update, { new: true });
}

//find user 
export const findOneAdminUser = (filter) => {
    return adminUserSchema.findOne(filter);
};



