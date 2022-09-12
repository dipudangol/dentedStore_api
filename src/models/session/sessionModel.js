import sessionSchema from './sessionSchema.js';

export const insertSession  = (obj) => {
    return sessionSchema(obj).save();
}
  

//filter should be object
export const getSession=(filter)=>{
    return sessionSchema.findOne(filter);
}

//delete seesion
export const deleteSession=(filter)=>{
    return sessionSchema.findOneAndDelete(filter);
}
