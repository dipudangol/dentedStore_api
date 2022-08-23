import jwt from "jsonwebtoken";
import { updateOneUser } from "../models/adminUser/adminUserModel.js";
import { insertSession } from "../models/session/sessionModel.js";


export const signAccessJWT = async (payload) => {
    const accessJWT = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
        expiresIn: "15m"
    });

    const obj = {
        token: accessJWT,
        type: 'jwt',
    };

    await insertSession(obj);
    return accessJWT;
};



export const signRefreshJWT = async (payload) => {
    const refreshJWT = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
        expiresIn: "30d"
    });

    await updateOneUser(payload, { refreshJWT })

    return refreshJWT;
};


export const createJWTS = async (payload) => {
    return {
        accessJWT: await signAccessJWT(payload),
        refreshJWT: await signRefreshJWT(payload),
    }
}