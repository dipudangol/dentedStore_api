import express from 'express';

const router = express.Router();


const ReviewArg = [
{
    _id:"asasda",
    review:"Some review msg here",
    productId:"ipad123",
    productName:"Ipad pro",
    rating:5,
    reviewby:"Dipu",
    reviewById:"asdasdasd"
},
{
    _id:"asreera",
    review:"Some review msg here",
    productId:"ipad123",
    productName:"Ipad pro",
    rating:5,
    reviewby:"Dipu",
    reviewById:"asdasdasd"
},{
    _id:"acvsa",
    review:"Some review msg here",
    productId:"ipad123",
    productName:"Ipad pro",
    rating:5,
    reviewby:"Dipu",
    reviewById:"asdasdasd"
},{
    _id:"asdfga",
    review:"Some review msg here",
    productId:"ipad123",
    productName:"Ipad pro",
    rating:5,
    reviewby:"Dipu",
    reviewById:"asdasdasd"
},{
    _id:"asacv",
    review:"Some review msg here",
    productId:"ipad123",
    productName:"Ipad pro",
    rating:5,
    reviewby:"Dipu",
    reviewById:"asdasdasd"
},{
    _id:"ahjsa",
    review:"Some review msg here",
    productId:"ipad123",
    productName:"Ipad pro",
    rating:5,
    reviewby:"Dipu",
    reviewById:"asdasdasd"
},
]


router.get("/:_id?", (req, res, next) => {
    try {
        const { _id } = req.params;
        const reviews = _id ? ReviewArg.filter(item => item._id === _id)[0] : ReviewArg;

        res.json({
            status: "success",
            message: "todo",
            reviews,
        })
    } catch (error) {
        next(error);
    }
})

export default router;