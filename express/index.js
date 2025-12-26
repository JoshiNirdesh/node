import express from 'express'
import { getUser } from './controllers/userController.js';
const app = express();

app.set("view engine",'ejs');

app.get("/users",getUser)
app.listen(4000);