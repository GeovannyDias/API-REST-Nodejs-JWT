'use strict';
import app from "./app";
import "./db";
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server Running...', port);
});
