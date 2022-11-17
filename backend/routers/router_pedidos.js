const express = require('express');
const router = express.Router();
const controladorPedidos = require('../controllers/controller_pedidos');

router.get("/listar",controladorPedidos);
router.post('/agregar',controladorPedidos);
router.delete('/borrar/:id', controladorPedidos);
router.post('/editar/:id',controladorPedidos);

module.exports = router;
