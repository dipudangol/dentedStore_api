import express from 'express';
import { hassPassword } from '../helpers/bcryptHelper.js';
import { insertAdminUser } from '../models/adminUser/adminUserModel.js';

const router = express.Router();

//server side validation

//encrypt user password
//insert into db
//create unique verification code
//send a link pointing to our frontend to verify the email  via verification code



router.post("/", async (req, res, next) => {
    try {
        const { password } = req.body;

        const hasspwd = hassPassword(password);
        req.body.password = hasspwd;
        console.log(hasspwd, "is the encrypted msg");
        console.log(req.body);
        const user = await insertAdminUser(req.body);

        user?.id ?
            res.json({
                status: "success",
                message: "User added"
            })
            : res.json({
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