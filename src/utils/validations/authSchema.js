import {object, string, ref} from "yup"

export const registerSchema = object().shape({
    confirmPassword:string().required("Confirme rapidito ese mail parce").oneOf([ref("password"), null],"Pilas! no son iguales parcero"),
    password:string().required("esa no es su contraseña parcero").min(8,"son 8 caracteres parce!"),
    email:string().required("¡la embarro parce!").email("No le sirve ese correo pez")
})

export const loginSchema = object().shape({
    password:string().required("esa no es su contraseña parcero").min(8,"son 8 caracteres parce!"),
    email:string().required("¡la embarro parce!").email("No le sirve ese correo pez")
})