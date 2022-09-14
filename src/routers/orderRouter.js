import express from 'express';

const router = express.Router();


const ordersArg = [
    {
        _id: "11",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    },
    {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    }, {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    }, {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    }, {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    }, {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    }, {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    }, {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    }, {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    }, {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    }, {
        _id: "1",
        status: "processing",
        buyer: {
            buyerId: "asasas",
            fName: "Dipu",
            lName: "asas",
            email: "a@a.com",
            phone: "12345678",
        },
        cart: [
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 123,
                thumbnail: "http://asa",
                subTotal: 12300,
            },
            {
                productId: "asas",
                productName: "asas",
                salesPrice: 100,
                qty: 13,
                thumbnail: "http://asa",
                subTotal: 1300,
            },
        ],
        shipping: {
            fName: "asas",
            lName: "asas",
            phone: 1234,
            street: "10 campsie street",
            suburb: "sydney",
            postcode: 1234,
            state: "NSW",
            country: "australia",
        },
        cartTotal: 450,
        discount: 50,
        discountCode: "asass",
        totalAmount: 400,
        paymentInfo: {
            status: "paid",
            method: "cash",
            paidAmount: 400,
            transactionId: "asas",
            paidDate: "2020-1-12"
        }
    },
]


router.get("/:_id?", (req, res, next) => {
    try {
        const { _id } = req.params;
        const orders = _id ? ordersArg.filter(item => item._id === _id)[0] : ordersArg;

        res.json({
            status: "success",
            message: "todo",
            orders,
        })
    } catch (error) {
        next(eror);
    }
})

export default router;