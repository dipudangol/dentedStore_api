import 'dotenv/config';
import express from 'express';
const app = express();
import cors from "cors";
import helmet from "helmet";
import { adminAuth } from './src/middlewares/auth-middleware/authMiddleware.js';
import path from 'path';

const PORT = process.env.PORT || 8000;

//db connection
import dbConnection from './src/config/dbConfig.js';
dbConnection();

//middleware
app.use(cors());
app.use(helmet());
app.use(express.json());


// serve static files
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, "public")));

//api calls
import adminUserRouter from './src/routers/adminUserRouter.js';
import categoryRouter from './src/routers/categoryRouter.js';
import paymentMethodRouter from './src/routers/paymentMethodRouter.js';
import productRouter from './src/routers/productRouter.js';
import orderRouter from './src/routers/orderRouter.js';
import reviewRouter from './src/routers/reviewRouter.js';
import userRouter from './src/routers/userRouter.js';


app.use("/api/v1/admin-user", adminUserRouter);
app.use("/api/v1/category", adminAuth, categoryRouter);
app.use("/api/v1/payment-method", adminAuth, paymentMethodRouter);
app.use("/api/v1/product", adminAuth, productRouter);
app.use("/api/v1/order", adminAuth, orderRouter);
app.use("/api/v1/reviews", adminAuth, reviewRouter);
app.use("/api/v1/users", adminAuth, userRouter);

app.get("/", (req, res) => {
    res.json({
        message: "In the main page"
    });
});



app.use((error, req, res, next) => {
    console.log(error);
    const statusCode = error.status || 404;

    res.status(statusCode).json({
        status: "error",
        message: error.message,

    })
}
)


app.listen(PORT, error => {
    error ? console.log(error) : console.log(`server running at http://localhost:${PORT}`);
})