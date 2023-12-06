import express from 'express';
import { Usuario } from '../modelos/usuarioModelo.js';

const router = express.Router();

//Ruta para solicitar todos los usuarios
router.get('/', async (request, response) => {
    try {
        const usuarios = await Usuario.find({});

        return response.status(200).json(usuarios)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para solicitar un usuario
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const usuario = await Usuario.findById(id);

        return response.status(200).json(usuario)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para solicitar un usuario por correo
router.get('/correo/:email', async (request, response) => {
    try {
        const { email } = request.params;
        const usuario = await Usuario.findOne({correo: email});

        if (usuario.length == 0) {
            return response.status(404).json({ message: "No se encontro el usuario" });
        }
        return response.status(200).json(usuario)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para crear un nuevo usuarios
router.post('/', async (request, response) => {
    try {
        if (
            !request.body.nombre ||
            !request.body.documento ||
            !request.body.correo ||
            !request.body.telefono ||
            !request.body.rol ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Hay campos faltantes',
            });
        }
        const newUsuario = {
            nombre: request.body.nombre,
            documento: request.body.documento,
            correo: request.body.correo,
            telefono: request.body.telefono,
            rol: request.body.rol,
            password: request.body.password,
        };

        const usuario = await Usuario.create(newUsuario);

        return response.status(201).send(usuario);
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
            !request.body.telefono ||
            !request.body.rol ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Hay campos faltantes',
            });
        }

        const { id } = request.params;
        const resultado = await Usuario.findByIdAndUpdate(id, request.body);

        if (!resultado) {
            return response.status(404).send({ message: 'No se encontro el usuario' });
        }
        return response.status(200).send({ message: 'Usuario actualizado exitosamente' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

//Ruta para eliminar un cliente
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const resultado = await Usuario.findByIdAndDelete(id);

        if (!resultado) {
            return response.status(404).json({ message: "No se encontro el usuario" });
        }
        return response.status(200).send({ message: 'Usuario eliminado exitosamente' });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;