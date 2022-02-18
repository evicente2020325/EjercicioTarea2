const express = require('express');
const controladorUsuario = require('../controller/usuarios.controller');

const api = express.Router();

api.post('/registrar', controladorUsuario.Registrar);
api.post('/login', controladorUsuario.Login);
api.post('/registrarMaestro', controladorUsuario.RegistrarMaestro);
module.exports = api;