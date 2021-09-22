'use strict';
import app from "./app";
import "./db";

app.listen(4000, () => {
    console.log('Server Running...');
});
