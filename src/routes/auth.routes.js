'use strict';
import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
import { verifySignup } from "../middlewares";
const router = Router();

// → /api/auth/signup
router.post('/signup',
    [verifySignup.checkDuplicateUserOrEmail, verifySignup.checkRolesExisted]
    , authCtrl.signUp
);

// → /api/auth/signin
router.post('/signin', authCtrl.signIn);

export default router;
