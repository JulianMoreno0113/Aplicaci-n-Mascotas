// definimos modulos internos

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// defino el esquema de de la coleccion usuarios

const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    correo: String,
    pass: String
});

// generar el json web token

esquemaUsuario.methods.generateJWT = function() {
    return jwt.sign({
        _id: this.id,
        nombre: this.nombre,
        correo: this.correo
    },"clave")
}

// crear exports

const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;
