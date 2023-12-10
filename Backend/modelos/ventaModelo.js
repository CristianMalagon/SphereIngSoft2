import mongoose from "mongoose"

const ventaSchema = mongoose.Schema(
    {
        articulos: [],
        precio: {
            type: Number,
            required:true,
        },
        fecha: {
            type: String,
            required:true,
        }
    }
)

export const Venta = mongoose.model('Venta', ventaSchema, 'ventas')