const express = require('express');
const controladorCursos = require('../controller/cursos.controller');

const api = express.Router();
const md_autenticacion = require('../middlewares/autenticacion')

api.post('/agregarCurso',controladorCursos.AgregarCurso);
api.put('/editarCurso/:idCurso', md_autenticacion.Auth ,controladorCursos.EditarCurso);
api.delete('/eliminarCurso/:idCurso',controladorCursos.EliminarCurso);

module.exports = api;