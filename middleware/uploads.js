import multer from multer;
import {multerSaveFile} from  multerSaveFile

export const galleryUpload = multer({
    storage: multerSaveFile({
        SAVEFILESORG_API_KEY,
        relativePath: '/wedding-gallery'
    }),
    preservePath: true
})