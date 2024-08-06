import {model} from "../models/aprobados.model.js"

export const test1 = (() => {
    console.log('llamando modelo aprobados')
})

model.create({
    alumno:"Alejandro",
    apepat:"Floriano",
    apemat:"Floriano",
    promedio:"9"
})