import { modeloreprobados } from "../models/reprobados.models.js";

modeloreprobados.create({
    name:"Panchito",
    apepat:"Perez",
    apemat:"Lopez",
    Edad:45
})

export const test=()=>{
    console.log("llamando al controlador")
}