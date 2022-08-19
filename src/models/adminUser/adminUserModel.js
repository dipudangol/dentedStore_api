import adminUserSchema from "./adminUserSchema.js";

//insert user
export const insertAdminUser = obj => {
    return adminUserSchema(obj).save();

}


