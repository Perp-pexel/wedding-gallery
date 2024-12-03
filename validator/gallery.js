import Joi from "joi";

export const addGalleryValidator = Joi.object({
    image: Joi.string(),
    name: Joi.string(),    
    message: Joi.string()
});

export const updateGalleryValidator = Joi.object({
    image: Joi.string(),
    name: Joi.string(),    
    message: Joi.string()
});