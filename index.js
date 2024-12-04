import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import galleryRouter from "./route/gallery.js";
import Joi from "joi";
import multer from "multer";

// connect to database
await mongoose.connect(process.env.MONGO_URI);

//  create an express app
const app = express();

// Use middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use(galleryRouter);

// listen to port
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);})

