'use strict';
// Se importa el modelo con cualquier nombre por convension la primera letra en mayúscula User
import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;
    // Comprobar si el user ya existe // Validar en carpeta libs
    // const userFound = User.find({ email });

    const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password),
    });

    // Valida los roles
    if (roles) {
        // Busca el nombre de todos los roles que llega y devuelve un arreglo con objetos
        const foundRoles = await Role.find({ name: { $in: roles } });
        newUser.roles = foundRoles.map(role => role._id);
        // roles["6546dasd4a546", "1651654ad546asd6"] // guarda los IDs de los roles
        // Validar si los roles enviados existan caso contrario tambien enviar el rol por defecto user
    } else {
        const role = await Role.findOne({ name: 'user' });
        newUser.roles = [role._id];
    }
    const savedUser = await newUser.save();
    // console.log(savedUser);

    // JSONWEBTOKEN
    // jwt.sign({ id: savedUser._id }, 'secret-password', {});
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400 // 24 horas en segundos
    });

    res.status(200).json({ token });
};

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    // VALIDATE EMAIL
    // populate → poblar la propiedad roles
    const userFound = await User.findOne({ email }).populate('roles');
    if (!userFound) return res.status(404).json({ 'code': 'FAIL_CONTENT', 'message': 'User not found.' });

    // se puede recorre los roles y dejar solo el nombre del rol ['moderator', 'admin']
    // roles: [{_id: new ObjectId("614ab66f794bc0c1a4fa2d71"),name: 'moderator'},{ _id: new ObjectId("614ab66f794bc0c1a4fa2d72"), name: 'admin' }],

    // COMPARE PASSWORD
    const mathPassword = await User.comparePassword(password, userFound.password);
    if (!mathPassword) return res.status(401).json({ 'token': '', 'code': 'FAIL_CONTENT', 'message': 'Invalid password.' })
    // console.log(userFound);
    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
        expiresIn: 86400 // 24 horas en segundos
    });

    res.status(200).json({ token });
};




