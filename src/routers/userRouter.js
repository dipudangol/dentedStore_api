import express from 'express';

const router = express.Router();


const userArg = [
    {
        id:"a1",
        fName:"Dipu",
        Lname:"Dangol",
        email:"a@a.com",
        phone:12342342,
    },
    {
        id:"aas1",
        fName:"Dipu",
        Lname:"Dangol",
        email:"a@a.com",
        phone:12342342,
    },{
        id:"21",
        fName:"Dipu",
        Lname:"Dangol",
        email:"a@a.com",
        phone:12342342,
    },{
        id:"f1",
        fName:"Dipu",
        Lname:"Dangol",
        email:"a@a.com",
        phone:12342342,
    },{
        id:"sd1",
        fName:"Dipu",
        Lname:"Dangol",
        email:"a@a.com",
        phone:12342342,
    },{
        id:"aer1",
        fName:"Dipu",
        Lname:"Dangol",
        email:"a@a.com",
        phone:12342342,
    },
]


router.get("/:_id?", (req, res, next) => {
    try {
        const { _id } = req.params;
        const users = _id ? userArg.filter(item => item._id === _id)[0] : userArg;

        res.json({
            status: "success",
            message: "todo",
            users,
        })
    } catch (error) {
        next(error);
    }
})

export default router;