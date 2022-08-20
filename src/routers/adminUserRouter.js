import express from 'express';
import { hassPassword } from '../helpers/bcryptHelper.js';
import { newAdminUserValidation } from '../middlewares/joi-validation/adminUserValidation.js';
import { insertAdminUser } from '../models/adminUser/adminUserModel.js';
import { v4 as uuidv4 } from "uuid";
import { verificationEmail } from '../helpers/emailHelper.js';

const router = express.Router();


//server side validation

//encrypt user password
//insert into db
//create unique verification code
//send a link pointing to our frontend to verify the email  via verification code



router.post("/", newAdminUserValidation, async (req, res, next) => {
    try {
        const { password } = req.body;

        const hasspwd = hassPassword(password);
        req.body.password = hasspwd;
        req.body.emailValidationCode = uuidv4();
        console.log(hasspwd, "is the encrypted msg");
        console.log(req.body);
        const user = await insertAdminUser(req.body);


        if (user?.id) {
            res.json({
                status: "success",
                message: "User added"
            });

            const url = `${process.env.ROOT_DOMAIN}/admin/verify-email?
            c=${user.emailValidationCode}&e=${user.email}`;
            //send mail
            verificationEmail({
                fName:user.fName,
                lName:user.lName,
                email:user.email,
                url,
            })

            return;
        }
        res.json({
            status: "error",
            message: "User isn't addes"
        });
    } catch (error) {
        if (error.message.includes("E11000 duplicate key error collection")) {
            error.status = 200;
            error.message = "There is already user with this email, change it"
        }
        next(error);
    }
})
router.patch("/verify-email", (req, res, next) => {
    try {
        console.log(req.body);

        res.json({
            status: "success",
            message: "Todo verify new user email"
        });
    } catch (error) {
        next(error);
    }
})


export default router;