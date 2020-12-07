// referenciar los modulos internos node

const jwt = require("jsonwebtoken")

// crea nuestra funcion middleware

function autenticacion (req, res, next) {

    let jwtToken = req.header("Authorization");

    jwtToken = jwtToken.split(" ")[1];

    // si no exite token

    if(!jwtToken) return res.status(400).send("No existe token para validar")

    // si existe un jwt
    try {

        const payload = jwt.verify(jwtToken,"clave");
        req.usuario = payload; 
        next();

    } catch (error) {
        res.status(400).send(" Token no valido ")
    }

}

// hacemos los exports

module.exports = autenticacion;
