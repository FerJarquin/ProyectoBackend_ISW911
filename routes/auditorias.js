const express = require('express');
const ServicioAuditoria = require('./../services/auditorias.js');
const { Console } = require('console');

const Auditorias = new ServicioAuditoria();

const Router = express.Router();


Router.get('/', async (solicitud, respuesta) => {
  const Auditorias = await listadoDeAuditorias(solicitud.params.AuditoriaId);
  respuesta.json(Auditorias);
});

Router.get('/:AuditoriaId', async (solicitud, respuesta) => {
  const Auditorias = await listadoDeAuditorias(solicitud.params.AuditoriaId);
  respuesta.json(Auditorias);
});

function listadoDeAuditorias(AuditoriaId) {
  return Auditorias.Listar(AuditoriaId);
}

Router.post('/', async (solicitud, respuesta) => {

  const Auditoria = {
            UsuarioId: solicitud.body.UsuarioId,
            Accion: solicitud.body.Accion, 
            Fecha: solicitud.body.Fecha
  }
  return Auditorias.Agregar(Auditoria)
});

Router.delete('/:AuditoriaId', async (solicitud, respuesta) => {

  respuesta.json(Auditorias.Borrar(solicitud.params.AuditoriaId))

});

Router.put('/:AuditoriaId', async (solicitud, respuesta) => {
const { AuditoriaId } = solicitud.params;
const { Accion } = solicitud.body;
respuesta.json(Auditorias.Actualizar(AuditoriaId, Accion));
});


module.exports = Router;
//#endregion
