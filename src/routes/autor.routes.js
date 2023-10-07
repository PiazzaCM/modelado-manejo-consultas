import { Router } from 'express';
import { getAutores, createAutor, getAutor, updateAutor, deleteAutor } from '../controllers/autor.controller.js';

const router = Router();

router.get('/', getAutores);
router.post('/', createAutor);
router.get('/:id', getAutor);
router.put('/:id', updateAutor);
router.delete('/:id', deleteAutor);

export default router;