import express from 'express';
const app =express();
app.use(express.json());
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
app.listen(8086,()=>{
console.log("Server is listening on 8086!");
}
);

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);