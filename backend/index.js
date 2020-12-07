// invocar modulos internos

const express = require("express");
const mongoose = require("mongoose");
const { Usuario } = require("./model/usuario");

//modulos creados

const usuario = require("./route/usuario");
const autenticacion = require("./route/autenticacion");
const mascota = require("./route/mascota")

// app

const app = express();
app.use(express.json());

// definimos la ruta para el modulo usuarios

app.use("/api/usuario",usuario);
app.use("/api/autenticacion",autenticacion);
app.use("/api/mascota", mascota);

// puertos de ejecucion

const port = process.env.PORT ||  3000 ;
app.listen(port, () => console.log (" Se esta ejecutando por el puerto ", port));

//registro mongo
mongoose.connect("mongodb://localhost/mascotadb" , {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("conexion con mongo perfecta"))
.catch(() => console.log("conexion con mongo off"));