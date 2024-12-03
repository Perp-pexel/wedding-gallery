import { Router } from "express";
import { addGallery, getGallery, getOneGallery, updateGallery, deleteGallery } from "../controller/gallery.js";


const galleryRouter = Router();

galleryRouter.post("/gallery", addGallery);
galleryRouter.get("/gallery", getGallery);
galleryRouter.get("/gallery/:id", getOneGallery);
galleryRouter.patch("/gallery/:id", updateGallery);
galleryRouter.delete("/gallery/:id", deleteGallery);

export default galleryRouter