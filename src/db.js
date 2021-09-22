import mongoose from "mongoose";

mongoose.connect('mongodb+srv://geo:geo123456@cluster0.pebzw.mongodb.net/company-db')
.then(db=> console.log('DB is Connected!'))
.catch(error =>console.log('DB Error:', error));