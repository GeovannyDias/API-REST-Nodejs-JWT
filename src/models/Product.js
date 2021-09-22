'use strict';
import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String // Dirección de imagen del producto
},{
    timestamps: true, // (createdAt and updatedAt.) Fecha de creación y actualización de forma automática
    versionKey: false // no se cree el valor __v en el documento
});

// Exportamos un model con el nombre del documento de la BD basado en el Schema que se creó
// export default model('name_document', productSchema);
export default model('products', productSchema);
