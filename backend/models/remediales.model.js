import { Schema, model } from "mongoose";

const esquema2 = new Schema({
    alumno:{
        type:String 
    },
    status:{
        type:String
    },
})

export const modelo2 = new model ('remediales pagados', esquema2)