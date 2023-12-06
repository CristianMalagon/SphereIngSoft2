import express from 'express';
import { Producto } from '../modelos/productoModelo.js';

const router = express.Router();

//Ruta para solicitar todos los clientes
router.get('/', async (request, response) => {
    try {
        const productos = await Producto.find({});

        return response.status(200).json(productos)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para solicitar un cliente
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const producto = await Producto.findById(id);

        return response.status(200).json(producto)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para crear un nuevo cliente
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.nombre ||
            !request.body.descripcion ||
            !request.body.precio ||
            !request.body.stock
        ) {
            return response.status(400).send({
                message: 'Hay campos faltantes',
            });
        }
        const newProducto = {
            nombre: request.body.nombre,
            descripcion: request.body.descripcion,
            precio: request.body.precio,
            stock: request.body.stock,
        };

        const producto = await Producto.create(newProducto);

        return response.status(201).send(producto);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para actualizar un cliente
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.nombre ||
            !request.body.descripcion ||
            !request.body.precio ||
            !request.body.stock
        ) {
            return response.status(400).send({
                message: 'Hay campos faltantes',
            });
        }

        const { id } = request.params;
        const resultado = await Producto.findByIdAndUpdate(id, request.body);

        if (!resultado) {
            return response.status(404).send({ message: 'No se encontro el producto' });
        }
        return response.status(200).send({ message: 'Producto actualizado exitosamente' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para eliminar un cliente
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const resultado = await Producto.findByIdAndDelete(id);

        if (!resultado) {
            return response.status(404).json({ message: "No se encontro el producto" });
        }
        return response.status(200).send({ message: 'Producto eliminado exitosamente' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;