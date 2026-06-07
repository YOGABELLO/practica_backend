import { Router } from 'express';
import {
  listarUsuarios,
  obtenerUsuario,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario
} from '../controllers/controller.usuario.js';
import { verificarToken } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/usuarios', verificarToken, listarUsuarios);

router.get('/usuarios/:id', verificarToken, obtenerUsuario);

router.post('/usuarios', verificarToken, crearUsuario);

router.put('/usuarios/:id', verificarToken, actualizarUsuario);

router.delete('/usuarios/:id', verificarToken, eliminarUsuario);


/*router.get('/usuarios', listarUsuarios);
router.get('/usuarios/:id', obtenerUsuario);
router.post('/usuarios', crearUsuario);
router.put('/usuarios/:id', actualizarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);*/


export default router;