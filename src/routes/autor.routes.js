import { Router } from 'express';
import { getAutores, createAutor, getAutor, updateAutor, deleteAutor } from '../controllers/autor.controller.js';

const autorRouter = Router();

autorRouter.post('/', createAutor);
autorRouter.get('/', getAutores);
autorRouter.get('/:id', getAutor);
autorRouter.put('/:id', updateAutor);
autorRouter.delete('/:id', deleteAutor);

export { autorRouter }