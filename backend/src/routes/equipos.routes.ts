import { Router } from 'express';
import { createEquipo, deleteEquipo, getAllEquipos, getEquipoById, updateEquipo } from '../controllers/equipos.controllers';

const router = Router();

router.post('/equipo', createEquipo)
router.put('/equipo/:id', updateEquipo)
router.get('/equipo/:id', getEquipoById)
router.get('/equipos', getAllEquipos)
router.delete('/equipo/:id', deleteEquipo)

export default router;