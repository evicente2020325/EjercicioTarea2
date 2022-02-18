const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CursoSchema = new Schema({
    nombreCurso: String,
    idMaestro:{type: Schema.Types.ObjectId, ref: 'Usuarios'}
})

module.exports = mongoose.model('Curso', CursoSchema);