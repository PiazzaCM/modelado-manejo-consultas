import { Router } from 'express';
import { libroController } from '../controllers/libro.controller.js';



const libroRouter = Router();



//rutas
libroRouter.get('/', libroController.getLibros);
libroRouter.post('/', libroController.crearLibro);
libroRouter.get('/:id', libroController.getLibro);
libroRouter.put('/:id', libroController.actualizarLibro);
libroRouter.delete('/:id', libroController.eliminarLibro);


export { libroRouter }
