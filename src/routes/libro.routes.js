import { Router } from 'express';
import { getLibros, createLibro, getLibro, updateLibro, deleteLibro } from '../controllers/libro.controller.js';



const libroRouter = Router();



//rutas
libroRouter.get('/', getLibros);
libroRouter.post('/', createLibro);
libroRouter.get('/:id', getLibro);
libroRouter.put('/:id', updateLibro);
libroRouter.delete('/:id', deleteLibro);



export { libroRouter }
