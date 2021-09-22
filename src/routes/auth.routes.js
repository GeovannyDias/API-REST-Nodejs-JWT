'use strict';
import { Router } from "express";
import * as authCtrl from "../controllers/auth.controller";
const router = Router();

// → /api/auth/signup
router.post('/signup', authCtrl.signUp);

// → /api/auth/signin
router.post('/signin', authCtrl.signIn);

export default router;
