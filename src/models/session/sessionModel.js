import sessionSchema from './sessionSchema.js';

export const insertSession = (obj) => {
    return sessionSchema(obj).save();
}





