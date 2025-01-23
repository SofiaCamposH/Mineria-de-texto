import { modeloS } from '../models/supervisor.model.js';
 
modeloS.create({
    name: "Luis",
    apepat: "Perez",
    apemat: "Hernandez",
    age: 27,
    salario: 9500
})  

export const test1=()=>{
    console.log("llamando al controlador")
}