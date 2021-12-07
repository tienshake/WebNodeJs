import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/connectDB'
//evn
require("dotenv").config();
//khai bao
const app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// viewEngine
viewEngine(app);
//route
initWebRoutes(app);
//connectDB
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("backend nodeJS is running on the port: " + port);
});