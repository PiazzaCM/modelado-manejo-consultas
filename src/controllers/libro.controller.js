import { libroService } from "../models/libro.model";

export const libroController = {
    async getLibros(req, res) {
        try {
            const libros = await libroService.getLibros();
            res.status(200).json(libros);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async getLibro(req, res) {
        try {
            const libro = await libroService.getLibro(req.params.id);
            res.status(200).json(libro);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async crearLibro(req, res) {
        try {
            const libro = await libroService.crearLibro(req.body);
            res.status(200).json(libro);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async actualizarLibro(req, res) {
        try {
            const libro = await libroService.actualizarLibro(req.params.id, req.body);
            res.status(200).json(libro);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    async borrarLibro(req, res) {
        try {
            const libro = await libroService.borrarLibro(req.params.id);
            res.status(200).json(libro);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}