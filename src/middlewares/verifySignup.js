'use strict';
import { ROLES } from "../models/Role";
import User from "../models/User";

export const checkDuplicateUserOrEmail = async (req, res, next) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).json({ code: 'FAIL_DUPLICATE', message: 'The user already exists.' });
    const email = await User.findOne({ email: req.body.email });
    if (email) return res.status(400).json({ code: 'FAIL_DUPLICATE', message: 'The email already exists.' });
    next();
}

export const checkRolesExisted = async (req, res, next) => {
    const roles = req.body.roles;
    if (roles) {
        for (let index = 0; index < roles.length; index++) {
            if (!ROLES.includes(roles[index])) {
                return res.status(400).json({
                    'code': 'FAIL_CONTENT',
                    'message': `Role ${roles[index]} does not exists.`
                })
            }
        }
    }
    next();
}


