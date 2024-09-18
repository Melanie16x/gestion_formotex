import { Router } from 'express';
import { 
    CreateUsuario, 
    deleteUsuario, 
    getAllUsuarios, 
    getUsuarioById, 
    UpdateUsuario 
} from '../controllers/usuario.controllers';

const router = Router();

router.post('/usuario', CreateUsuario)
router.put('/usuario/:id', UpdateUsuario)
router.get('/usuario/:id', getUsuarioById)
router.get('/usuarios', getAllUsuarios)
router.delete('/usuario/:id', deleteUsuario)

export default router;