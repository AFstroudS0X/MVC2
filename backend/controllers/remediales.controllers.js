import {model} from "../models/remediales.model.js"

export const test1 = (() => {
    console.log('llamando modelo remedial')
})

model.create({
   alumno:"Mondongo",
   status:"pagado"
})