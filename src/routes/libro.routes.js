import { Router } from 'express';
import { getLibros, createLibro, getLibro, updateLibro, deleteLibro } from '../controllers/libro.controller.js';

const router = Router();




//rutas
router.get('/', getLibros);
router.post('/', createLibro);
router.get('/:id', getLibro);
router.put('/:id', updateLibro);
router.delete('/:id', deleteLibro);



export default router;




