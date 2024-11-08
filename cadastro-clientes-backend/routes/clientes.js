import express from 'express';
import { cadastrarCliente, listarClientes, detalheCliente } from '../controllers/clienteController.js';
import upload from '../config/uploadConfig.js';
const router = express.Router();

router.post('/cadastrar', upload.single('foto'), cadastrarCliente);
router.get('/cadastros', listarClientes);
router.get('/cadastro/:id', detalheCliente);

export default router;