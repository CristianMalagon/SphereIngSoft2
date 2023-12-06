import express from 'express';
import { Cliente } from '../modelos/clienteModelo.js';

const router = express.Router();

//Ruta para solicitar todos los clientes
router.get('/', async (request, response) => {
    try {
        const clientes = await Cliente.find({});

        return response.status(200).json(clientes)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para solicitar un cliente
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const cliente = await Cliente.findById(id);

        return response.status(200).json(cliente)
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
            !request.body.documento ||
            !request.body.correo ||
            !request.body.telefono
        ) {
            return response.status(400).send({
                message: 'Hay campos faltantes',
            });
        }
        const newCliente = {
            nombre: request.body.nombre,
            documento: request.body.documento,
            correo: request.body.correo,
            telefono: request.body.telefono,
        };

        const client = await Cliente.create(newCliente);

        return response.status(201).send(client);
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
            !request.body.documento ||
            !request.body.correo ||
            !request.body.telefono
        ) {
            return response.status(400).send({
                message: 'Hay campos faltantes',
            });
        }

        const { id } = request.params;
        const resultado = await Cliente.findByIdAndUpdate(id, request.body);

        if (!resultado) {
            return response.status(404).send({ message: 'No se encontro el cliente' });
        }
        return response.status(200).send({ message: 'Cliente actualizado exitosamente' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para eliminar un cliente
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const resultado = await Cliente.findByIdAndDelete(id);

        if (!resultado) {
            return response.status(404).json({ message: "No se encontro el cliente" });
        }
        return response.status(200).send({ message: 'Cliente eliminado exitosamente' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;