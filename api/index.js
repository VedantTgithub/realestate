import express from 'express';
const app =express();
import mongoose from 'mongoose';

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