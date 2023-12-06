import mongoose from "mongoose"

const productoSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required:true,
        },
        descripcion: {
            type: String,
            required:true,
        },
        precio: {
            type: Number,
            required:true,
        },
        stock: {
            type: Number,
            required:true,
        },
    }
)

export const Producto = mongoose.model('Producto', productoSchema, 'productos')