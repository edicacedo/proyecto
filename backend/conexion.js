const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/misiontic');
const miconexion = mongoose.connection;

miconexion.on('connected',()=>{
    console.log("Me conecte exitosamente con la base de datos!");
})

miconexion.on('error',()=>{
    console.log("Hubo un error en la conexion con la base de datos");
})

module.exports = mongoose;