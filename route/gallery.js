import { Router } from "express";
import { addGallery, getGallery, getOneGallery, updateGallery, deleteGallery } from "../controller/gallery.js";
import { galleryUpload } from "../middleware/uploads.js";


const galleryRouter = Router();

galleryRouter.post("/gallery", galleryUpload.single("image"), addGallery);
galleryRouter.get("/gallery", getGallery);
galleryRouter.get("/gallery/:id", getOneGallery);
galleryRouter.patch("/gallery/:id" , galleryUpload.single("image"), updateGallery);
galleryRouter.delete("/gallery/:id", deleteGallery);

export default galleryRouter