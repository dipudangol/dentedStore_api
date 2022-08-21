import jwt from "jsonwebtoken";
import { insertSession } from "../models/adminUser/session/sessionModel.js";


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

