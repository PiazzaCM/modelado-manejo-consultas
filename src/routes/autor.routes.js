import { Router } from 'express';
import { autorController } from '../controllers/autor.controller.js';

const autorRouter = Router();

autorRouter.post('/', autorController.crearAutor);
autorRouter.get('/', autorController.getAutores);
autorRouter.get('/:id', autorController.getAutor);
autorRouter.put('/:id', autorController.actualizarAutor);
autorRouter.delete('/:id', autorController.eliminarAutor);

export { autorRouter }
