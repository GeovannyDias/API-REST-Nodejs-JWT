'use strict';
import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username: {
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
// userSchema.statics.cualquier_nombre // hace referencia a crear métodos estáticos

// Cifrar la contraseña
userSchema.statics.encryptPassword = async (password) => { 
    // genSalt aplica un algoritmo en este caso 10 veces para no consumir muchos recursos
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt); // Retorna texto cifrado
};

// Comparar la contraseña
userSchema.statics.comparePassword = async (password, receivedPassword) => { 
    return await bcrypt.compare(password, receivedPassword); // True (si la contraseña coincide) or False (No coincide)
};



export default model('users', userSchema);

