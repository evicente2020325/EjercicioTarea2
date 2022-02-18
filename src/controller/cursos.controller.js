const Curso = require('../models/cursos.model');

function AgregarCurso(req, res) {
    var parametros = req.body;
    var modeloCurso = new Curso();
    var idMaestro = req.params.idMaestro; 
    
    if(req.user.sub !== idMaestro) {
        return res.status(500).send({mensaje: 'No tienes permiso para agregar un curso'})
    }else{

    if (parametros.nombreCurso && parametros.idMaestro){

        modeloCurso.nombreCurso = parametros.nombreCurso;
        modeloCurso.idMaestro = req.user.sub;
     
        modeloCurso.save((e, cursoGuardado) => {
            return res.send({ cursos : cursoGuardado});
        })
    }else {
        return res.send({ mensaje: "Debe llenar todos los parametros." })
    } 
    } 
}
function EditarCurso(req, res) {
    var idCur = req.params.idCurso;
    var parametros = req.body;
    var idMaestro = req.params.idMaestro; 

    if(req.user.sub !== idMaestro) {
        return res.status(500).send({mensaje: 'No tienes permiso para editar el curso'})
    }else{

    Curso.findByIdAndUpdate(idCur, parametros, {new:true}, (e,cursoEditado) => {
        if (e) return res.status(500).send({mensaje:'Error en la peticion'});
        if(!cursoEditado) return res.status(404).send({mensaje:'Error al editar el curso'});

        return res.status(200).send({curso: cursoEditado});
    })
    }
}

function EliminarCurso(req, res) {
    var idCur = req.params.idCurso;
    var idMaestro = req.params.idMaestro; 

    if(req.user.sub !== idMaestro) {
        return res.status(500).send({mensaje: 'No tienes permiso para eliminar el curso'})
    }else{
    
    Curso.findByIdAndDelete(idCur, (e, cursoEliminado) => {
        if(e) res.status(500).send({mensaje : 'Error de la peticion'});

        if(!cursoEliminado) return res.status(500)
        .send({ mensaje: 'Error al eliminar el curso' })

        return res.status(200).send({ curso: cursoEliminado});
    })
    }
}



module.exports = {
    AgregarCurso,
    EditarCurso,
    EliminarCurso
}