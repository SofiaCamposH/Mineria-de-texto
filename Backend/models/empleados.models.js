import { Schema,model } from "mongoose";
const esquema = new Schema ({
    name: String,
    apepat: String, 
    apemat:String, 
    noE: Number, 
    salario:Number, 
})

export const modeloE = new model ("tabla de esquema empleados")