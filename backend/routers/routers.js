const express = require('express');
const router = express.Router();

const rutaPedidos = require('./router_pedidos');
router.use("/pedidos",rutaPedidos);

module.exports = router;