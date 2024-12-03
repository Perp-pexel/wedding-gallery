import {GalleryModel} from "../model/gallery.js";
import { addGalleryValidator } from "../validator/gallery.js";

export const addGallery = async (req, res) => {
    try {
        const { error, value} = addGalleryValidator.validate(req.body);
        if (error) {
            return res.status(400).json(error)
        }
        const gallery = await GalleryModel.create(req.body);
        res.status(200).json({
            message: "gallery added successfully",
            gallery
        });      
    } catch (error) {
        next (error)   
    }
}

export const getGallery = async (req, res) => {
    try {
        const gallery = await GalleryModel.find();
        res.status(200).json({
            message: "gallery fetched successfully",
            gallery
        });
    
    } catch (error) {
        next (error)    
    }
}

export const getOneGallery = async (req, res) => {
    try {
        const gallery = await GalleryModel.findById(req.params.id);
        res.status(200).json({
            message: "gallery fetched successfully",
            gallery
        });
    
    } catch (error) {
        next (error)    
    }
}

export const updateGallery = async (req, res) => {
    try {
        const { error, value} = addGalleryValidator.validate(req.body);
        if (error) {
            return res.status(400).json(error)
        }
        const gallery = await GalleryModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({
            message: "gallery updated successfully",
            gallery
        });
    
    } catch (error) {
        next (error)    
    }
}
export const deleteGallery = async (req, res) => {
    try {
        const gallery = await GalleryModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "gallery deleted successfully",
            gallery
        });
    
    } catch (error) {
        next (error)    
    }
}