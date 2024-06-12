const express = require('express');
const ServicioProgramacion = require('./../services/programaciones.js');
const { Console } = require('console');

const Programaciones = new ServicioProgramacion();

const Router = express.Router();


Router.get('/', async (solicitud, respuesta) => {
  const Programaciones = await listadoDeProgramaciones(solicitud.params.ProgramacionId);
  respuesta.json(Programaciones);
});

Router.get('/:ProgramacionId', async (solicitud, respuesta) => {
  const Programaciones = await listadoDeProgramaciones(solicitud.params.ProgramacionId);
  respuesta.json(Programaciones);
});

function listadoDeProgramaciones(ProgramacionId) {
  return Programaciones.Listar(ProgramacionId);
}

Router.post('/', async (solicitud, respuesta) => {

  const Programacion = {
            ActualizadoEn: solicitud.body.ActualizadoEn,
            UsuarioId: solicitud.body.UsuarioId, 
            EstadoProgramacion: solicitud.body.EstadoProgramacion, 
            SolicitudId: solicitud.body.SolicitudId
  }
  return Programaciones.Agregar(Programacion)
});

Router.delete('/:ProgramacionId', async (solicitud, respuesta) => {

  respuesta.json(Programaciones.Borrar(solicitud.params.ProgramacionId))

});

Router.put('/:ProgramacionId', async (solicitud, respuesta) => {
const { ProgramacionId } = solicitud.params;
const { EstadoProgramacion } = solicitud.body;
respuesta.json(Programaciones.Actualizar(ProgramacionId, EstadoProgramacion));
});


module.exports = Router;
//#endregion
