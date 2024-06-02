import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/authroutes.js";
import messageRoutes from "./routes/messageroutes.js";
import userRoutes from "./routes/userroutes.js";

import connectToMongoDB from './db/connectToMongoDb.js';
import {app,server}from"./socket/socket.js"

const PORT =process.env.PORT || 5000; 
dotenv.config();
app.use(express.json()); 
app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.send('Hello World++');
// });
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes); 
app.use("/api/users",userRoutes); 
server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
})