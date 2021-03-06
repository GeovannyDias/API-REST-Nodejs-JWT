'use strict';
import express from "express";
import morgan from "morgan";
import pkg from "../package.json";

import { createRoles } from "./libs/initSetup";
import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const app = express();
createRoles(); // se crea los roles despues que inicia express

// Guardar variables en expres y obtener el valor (Reutilizar recursos)
app.set('pkg_json', pkg);

// Middlewares
app.use(express.json());
app.use(morgan('dev')); // Console Info

// Routes
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg_json').name,
        author: app.get('pkg_json').author,
        descripction: app.get('pkg_json').description,
        version: app.get('pkg_json').version
    });
});

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);



export default app;