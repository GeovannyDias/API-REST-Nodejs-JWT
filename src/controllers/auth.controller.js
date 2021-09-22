'use strict';
// Se importa el modelo con cualquier nombre
import User from "../models/User";

export const signUp = async (req, res) => {
    const { username, email, password, roles } = req.body;
    console.log(req.body);
    const user = new User({
        username,
        email,
        password,
    });
    res.json('signup');
};

export const signIn = async (req, res) => {
    // code...
    res.json('signin');
};




