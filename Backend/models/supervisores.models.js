import {esquema} from "./empleados.model.js";
import {model} from "mongoose";


export const modeloS = new model ("Tabla de esquema supervisor", esquema);