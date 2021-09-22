'use strict';
import { Schema, model } from "mongoose";

const roleSchema = new Schema({
    name: String
}, {
    versionKey: false
});

// { name: 'admin', _id: '54l54654a6s5d465as45a4s6d' }
// { name: 'moderator', _id: '3654654a6s5d465as45a4s6d' }

export default model('roles', roleSchema);