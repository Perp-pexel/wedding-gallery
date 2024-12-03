import { model, Schema } from "mongoose";
import {toJSON} from "@reis/mongoose-to-json"

const gallerySchema = new Schema ({
    image: {type: String },
    name: {type: String},
    message: {type: String,}
    }, {
        timestamps: true
    });

    gallerySchema.plugin(toJSON)

    export const GalleryModel = model("Gallery", gallerySchema)
