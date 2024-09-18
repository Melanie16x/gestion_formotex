import { Router } from 'express';
import { createMantenimiento, deleteMantenimiento, getAllMantenimientos, getMantenimientoById, updateMantenimiento } from '../controllers/mantenimiento.controllers';

const router = Router();

router.post('/mantenimiento', createMantenimiento)
router.put('/mantenimiento/:id', updateMantenimiento)
router.get('/mantenimiento/:id', getMantenimientoById)
router.get('/mantenimientos', getAllMantenimientos)
router.delete('/mantenimiento/:id', deleteMantenimiento)

export default router;