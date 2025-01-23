import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { test } from "./Backend/controllers/empleados.controllers.js";
import { test1 } from "./Backend/controllers/supervisores.controllers.js";

dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() =>{
    console.log("si funciona la base")
})
.catch(()=>{
    console.log("no funciona", err)
})
const app = express();
app.use(cors())
app.listen(4000, ()=>{
    console.log("se escucha el servidor")
})

test() 
test1()

