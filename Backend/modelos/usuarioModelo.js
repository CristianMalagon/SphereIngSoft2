import mongoose from "mongoose"

const usuarioSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required:true,
        },
        documento: {
            type: Number,
            required:true,
        },
        correo: {
            type: String,
            required:true,
        },
        telefono: {
            type: String,
            required:true,
        },
        rol: {
            type: String,
            required:true,
        },
        password: {
            type: String,
            required:true,
        }
    }
)

export const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios')