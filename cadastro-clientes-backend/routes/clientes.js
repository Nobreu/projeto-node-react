const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const upload = require('../config/uploadConfig');

router.post('/cadastrar', upload.single('foto'), clienteController.cadastrarCliente);
router.get('/cadastros', clienteController.listarClientes);
router.get('/cadastro/:id', clienteController.detalheCliente);

module.exports = router;
