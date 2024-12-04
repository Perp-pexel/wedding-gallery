import { GalleryModel } from "../model/gallery.js";
import { addGalleryValidator, updateGalleryValidator } from "../validator/gallery.js";

export const addGallery = async (req, res, next) => {
    try {
        const { error, value } = addGalleryValidator.validate({
            ...req.body,
            image: req.file?.filename || null, // Handle missing file uploads gracefully
        });

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const gallery = await GalleryModel.create(value);

        res.status(201).json({
            message: "Gallery added successfully",
            gallery 
        });
    } catch (error) {
        next(error);
    }
};

export const getGallery = async (req, res, next) => {
    try {
        const gallery = await GalleryModel.find();

        res.status(200).json({
            message: "Galleries fetched successfully",
            gallery, // Return all galleries
        });
    } catch (error) {
        next(error);
    }
};

export const getOneGallery = async (req, res, next) => {
    try {
        const gallery = await GalleryModel.findById(req.params.id);

        if (!gallery) {
            return res.status(404).json({ message: "Gallery not found" });
        }

        res.status(200).json({
            message: "Gallery fetched successfully",
            gallery, // Return the requested gallery
        });
    } catch (error) {
        next(error);
    }
};

export const updateGallery = async (req, res, next) => {
    try {
        const { error, value } = updateGalleryValidator.validate({
            ...req.body,
            image: req.file?.filename || undefined, // Update image if provided
        });

        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const gallery = await GalleryModel.findByIdAndUpdate( req.params.id, value, { new: true });

        if (!gallery) {
            return res.status(404).json({ message: "Gallery not found" });
        }

        res.status(200).json({
            message: "Gallery updated successfully",
            gallery, // Return the updated gallery
        });
    } catch (error) {
        next(error);
    }
};

export const deleteGallery = async (req, res, next) => {
    try {
        const gallery = await GalleryModel.findByIdAndDelete(req.params.id);

        if (!gallery) {
            return res.status(404).json({ message: "Gallery not found" });
        }

        res.status(200).json({
            message: "Gallery deleted successfully",
            gallery, // Return the deleted gallery
        });
    } catch (error) {
        next(error);
    }
};
