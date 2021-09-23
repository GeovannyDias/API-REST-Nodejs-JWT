'use strict';
import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";


// next es un intermediario entre funciones
export const verifyToken = async (req, res, next) => {
    try {
        // Enviar en header x-access-token
        // $http.get('/api/me', { headers: { 'x-access-token': token } });
        // $http.get('/api/me', { headers: { Authorization: 'Bearer ' + token } });
        // console.log(req.headers);

        const token = req.headers["x-access-token"];
        // const token = req.headers["authorization"];
        // console.log(token);
        // console.log(token.replace('Bearer ', '')); // Cuando
        // const tk = token.split(' ');
        // console.log(tk[1]);
        if (!token) return res.status(403).json({ 'code': 'FAIL_TOKEN', 'message': 'No token provided' });

        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id; // crea una variable userId en el req y se le asigna un valor
        const user = await User.findById(req.userId, { password: 0 }); // { password: 0 } elimina el password para enviar data a user
        console.log(user);
        if (!user) return res.status(404).json({ 'code': 'FAIL_CONTENT', 'message': 'No user found' });
        // req.token = token // crea una variable token en el req y se le asigna un valor
        next();
    } catch (error) {
        res.status(401).json({ 'code': 'FAIL_AUTHORIZATION', 'message': 'Unauthorized' }); // 500
    }
}

// Validar roles

export const isModerator = async (req, res, next) => {
    const userId = req.userId; // userId se guarda al momento de validar el token 
    const user = await User.findById(userId);
    const roles = await Role.find({ _id: { $in: user.roles } }); // de todos los roles buscar los que incluyen en user.roles $in similar map()
    for (let role of roles) {
        // console.log('role:', role);
        if (role.name === 'moderator') {
            console.log('Moderator Found');
            next();
            return;
        }
    }
    return res.status(403).json({ 'code': 'FAIL_CONTENTE', 'message': 'Require Moderator Role.' });
}

export const isAdmin = async (req, res, next) => {
    const userId = req.userId; // userId se guarda al momento de validar el token 
    const user = await User.findById(userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let role of roles) {
        // console.log('role:', role);
        if (role.name === 'admin') {
            console.log('Admin Found');
            next();// Permite continuar con la ejecución
            return;
        }
    }
    return res.status(403).json({ 'code': 'FAIL_CONTENTE', 'message': 'Require Admin Role.' });
}

