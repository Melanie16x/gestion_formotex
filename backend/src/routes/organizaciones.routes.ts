import { Router } from 'express';
import { 
    createOrganizacion,
    deleteOrganizacion, 
    getAllOrganizaciones, 
    getOrganizacionById, 
    updateOrganizacion 
} from '../controllers/organizaciones.controllers';

const router = Router();

router.post('/organizacion', createOrganizacion)
router.put('/organizacion/:id', updateOrganizacion)
router.get('/organizacion/:id', getOrganizacionById)
router.get('/organizaciones', getAllOrganizaciones)
router.delete('/organizacion/:id', deleteOrganizacion)

export default router;