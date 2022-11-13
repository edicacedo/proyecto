const express = require('express');
const router = express.Router();

const rutaClientes = require('./router_clientes');
router.use("/clientes",rutaClientes);

/*const rutaPedidos = require('./router_pedidos');
router.use("/pedidos",rutaPedidos);

const rutaConsultas = require('./router_consultas');
router.use("/consultas",rutaConsultas);
*/
module.exports = router;
