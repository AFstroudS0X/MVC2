import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv"
import {test1} from "./backend/controllers/aprobados.controllers.js"
import {test2} from "./backend/controllers/remediales.controllers.js"
import {test3} from "./backend/controllers/reprobados.controllers.js"

dotenv.config();

mongoose.connect(process.env.url)
.then (() =>{
    console.log('se establecio conexion')
})
.catch ((error) => {
    console.log('error de conexion',error)
})

const app = express ();
app.use(cors())

app.listen(4001,() => {
    console.log('servidor activo')
})

test1()
test2()
test3()
