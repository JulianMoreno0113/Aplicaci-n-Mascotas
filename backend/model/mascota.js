const mongoose = require("mongoose");
//const jwt = require("jsonwebtoken");

const esqmaMascota = new mongoose.Schema({
    idUsuario: String,
    nombre: String,
    tipo: String,
    descripcion: String
});

// exports

const Mascota = mongoose.model("mascota", esqmaMascota);
module.exports.Mascota = Mascota;
// module.exports.esqmaMascota = esqmaMascota;
