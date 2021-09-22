'use strict';
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    usernam: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: 'roles',
        type: Schema.Types.ObjectId // Relacionar Role al Usuario puede tener multiples roles
    }]
}, {
    timestamps: true,
    versionKey: false
});

// metodos para cifrar y comparar contraseñas
// userSchema.methods.any_name
// userSchema.static.cualquier_nombre // hace referencia a crear métodos estáticos

// userSchema.static.validate_password



export default model('users', userSchema);

