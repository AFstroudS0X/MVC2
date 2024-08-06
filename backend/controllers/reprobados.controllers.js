import {model} from "../models/reprobados.model.js"

export const test1 = (() => {
    console.log('llamando modelo reprobados')
})

model.create({
    alumno:"Juan Pablo",
    apepat:"Roman",
    apemat:"Rodriguez",
    promedio:"7"
})