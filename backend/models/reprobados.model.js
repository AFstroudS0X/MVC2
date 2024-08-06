import {Schema, model} from "mongoose"

const esquema3 = new Schema({
    alumno:{
        type:String 
    },
    apepat:{
        type:String
    },
    apemat:{
        type:String
    },
    promedio:{
        type:String
    }
})

export const modelo3 = new model ('Alumnos reprobados', esquema3)