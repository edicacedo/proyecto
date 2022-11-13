const express = require('express');
const app = express();

//establecer la conexión.
const miconexion = require('./conexion');

//Importamos body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Importamos las rutas
const rutas = require ('./routers/routers');
app.use('/api',rutas);

//Petición con el método get. De prueba
app.get('/',(req,res)=>{
    res.send('Servidor Ok. Puerto 5000');
});

//Inicializar el servidor
app.listen(5000,function(){
    console.log('Servidor funcionando puerto 5000');
});