import mongoose from "mongoose"

const clienteSchema = mongoose.Schema(
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
    }
)

export const Cliente = mongoose.model('Cliente', clienteSchema, 'clientes')