'use strict';
import { Schema, model } from "mongoose";

// por ser pocos se puede quemar los roles para validar o hacer una consulta a la DB
export const ROLES = ['user', 'admin', 'moderator']; 

const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
});

// { name: 'admin', _id: '54l54654a6s5d465as45a4s6d' }
// { name: 'moderator', _id: '3654654a6s5d465as45a4s6d' }

// se debe crear roles por defecto (carpeta libs)

export default model('roles', roleSchema);