import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Ejecuta dotenv y busca las variables de entorno de forma global en el proyecto

mongoose.connect(process.env.DB_MONGO)
.then(db=> console.log('DB is Connected!'))
.catch(error =>console.log('DB Error:', error));