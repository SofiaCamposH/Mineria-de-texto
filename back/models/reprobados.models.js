import {Schema,model} from 'mongoose'

const esquemareprobados = new Schema({
    name:String,
    apepat:String,
    apemat:String,
    edad:Number
})

export const modeloreprobados = new model("tabla de alumnos reprobados", esquemareprobados)