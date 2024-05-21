import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';


const app =express();
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5173', // Replace this with your frontend URL
    credentials: true,
  };
  
  app.use(cors(corsOptions));


import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
mongoose.connect("mongodb+srv://vedant0711:Vedant0711@vedant.wedaith.mongodb.net/?retryWrites=true&w=majority&appName=Vedant").then(
    ()=>{
        console.log("connected to mongodb");
    }
).catch((err)=>{
    console.log(err);
})
app.listen(6969,()=>{
console.log("Server is listening on 6969!");
}
);

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/listing',listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });