'use strict';
import { Router } from "express";
import * as productsCtrl from "../controllers/products.controller";
// import { verifyToken } from "../middlewares"; // cuando es index.js no es necesario colocarlo ../middlewares/index
import { authJwt } from "../middlewares"; // cuando es index.js no es necesario colocarlo ../middlewares/index
const router = Router();

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.postProduct);
router.get('/', productsCtrl.getProducts);
router.get('/:productId', productsCtrl.getProductById);
router.put('/:productId', [authJwt.verifyToken, authJwt.isModerator], productsCtrl.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin], productsCtrl.deleteProductById);  // debe tener los dos roles moderator and admin


export default router;
