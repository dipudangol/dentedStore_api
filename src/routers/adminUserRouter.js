import express from 'express';
import { comparePassword, hassPassword } from '../helpers/bcryptHelper.js';
import { emailVerificationValidation, loginValidation, newAdminUserValidation } from '../middlewares/joi-validation/adminUserValidation.js';
import { findOneAdminUser, insertAdminUser, updateOneUser } from '../models/adminUser/adminUserModel.js';
import { v4 as uuidv4 } from "uuid";
import { userVerifiedNotification, verificationEmail } from '../helpers/emailHelper.js';
import { createJWTS, signAccessJWT } from '../helpers/jwtHelper.js';

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
        const user = await insertAdminUser(req.body);


        if (user?.id) {
            res.json({
                status: "success",
                message: "User added, go to mail to  verify the email"
            });

            const url = `${process.env.ROOT_DOMAIN}/admin/verify-email?c=${user.emailValidationCode}&e=${user.email}`;
            //send mail
            verificationEmail({
                fName: user.fName,
                lName: user.lName,
                email: user.email,
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

//TO VERIFY THE Email 
router.patch("/verify-email", emailVerificationValidation, async (req, res, next) => {
    try {
        const { email, emailValidationCode } = req.body;

        const user = await updateOneUser({
            emailValidationCode,
            email,
        },
            {
                status: "active",
                emailValidationCode: "",
            })

        user?._id ?
            res.json({
                status: "success",
                message: "Account been verified, you can login now"

            }) && userVerifiedNotification(user)
            : res.json({
                status: "error",
                message: "invalid or expire link, no action was taken"

            })


        res.json({
            status: "success",
            message: "Todo verify new user email"
        });
    } catch (error) {
        next(error);
    }
})



//To post a user
router.post("/login", loginValidation, async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await findOneAdminUser({ email });

        if (user?._id) {
            if (user?.status !== "active") {
                return res.json({
                    status: "error",
                    message: "Account not verified, check and verify it again"
                })
            }
            const isMatched = comparePassword(password, user.password)
            if (isMatched) {
                user.password='';


                //jwt
                const jwts = await  createJWTS({ email });
                return res.json({
                    status: "success",
                    message: "Logged in Successfully!",
                    user,
                    ...jwts
                })
            }
        }
        res.json({
            status: "error",
            message: "Invalid login credentials"

        })

    } catch (error) {
        next(error);
    }
})


export default router;