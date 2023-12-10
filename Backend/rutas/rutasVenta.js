import express from 'express';
import { Venta } from '../modelos/ventaModelo.js';

const router = express.Router();

//Ruta para solicitar todos las ventas
router.get('/', async (request, response) => {
    try {
        const ventas = await Venta.find({});

        return response.status(200).json(ventas)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para solicitar una venta
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const venta = await Venta.findById(id);

        return response.status(200).json(venta)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para crear un nuevo cliente
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.articulos ||
            !request.body.precio ||
            !request.body.fecha 
        ) {
            return response.status(400).send({
                message: 'Hay campos faltantes',
            });
        }
        const newProducto = {
            articulos: request.body.articulos,
            precio: request.body.precio,
            fecha: request.body.fecha,
        };

        const venta = await Venta.create(newProducto);

        return response.status(201).send(venta);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para actualizar un cliente
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.articulos ||
            !request.body.precio ||
            !request.body.fecha 
        ) {
            return response.status(400).send({
                message: 'Hay campos faltantes',
            });
        }

        const { id } = request.params;
        const resultado = await Venta.findByIdAndUpdate(id, request.body);

        if (!resultado) {
            return response.status(404).send({ message: 'No se encontro la venta' });
        }
        return response.status(200).send({ message: 'Venta actualizado exitosamente' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para eliminar un cliente
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const resultado = await Venta.findByIdAndDelete(id);

        if (!resultado) {
            return response.status(404).json({ message: "No se encontro la venta" });
        }
        return response.status(200).send({ message: 'Venta eliminada exitosamente' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;