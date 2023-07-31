import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import userRouter from './routes/user.js';
dotenv.config();

// database connection
connectDB();

// set port
const port = process.env.PORT || 5000;

// init app
const app = express();

// pass user route
app.use('/api/users/', userRouter);


app.get('/', (req, res) => res.send('server is ready...'))

// middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`listening PORT: ${port}`));
