const express = require('express');
const ServicioSolicitud = require('./../services/solicitudes.js');
const { Console } = require('console');

const Solicitudes = new ServicioSolicitud();

const Router = express.Router();


Router.get('/', async (solicitud, respuesta) => {
  const Solicitudes = await listadoDeSolicitudes(solicitud.params.SolicitudId);
  respuesta.json(Solicitudes);
});

Router.get('/:SolicitudId', async (solicitud, respuesta) => {
  const Solicitudes = await listadoDeSolicitudes(solicitud.params.SolicitudId);
  respuesta.json(Solicitudes);
});

function listadoDeSolicitudes(SolicitudId) {
  return Solicitudes.Listar(SolicitudId);
}

Router.post('/', async (solicitud, respuesta) => {

  const Solicitud = {
    FechaCita: solicitud.body.FechaCita,
    ComentarioSolicitud: solicitud.body.ComentarioSolicitud, 
    ClienteId: solicitud.body.ClienteId, 
    ServicioId:solicitud.body.ServicioId
  }
  return Solicitudes.Agregar(Solicitud)
});

Router.delete('/:SolicitudId', async (solicitud, respuesta) => {

  respuesta.json(Solicitudes.Borrar(solicitud.params.SolicitudId))

});

Router.put('/:SolicitudId', async (solicitud, respuesta) => {
const { SolicitudId } = solicitud.params;
const { FechaSolicitud } = solicitud.body;
respuesta.json(Solicitudes.Actualizar(SolicitudId, FechaSolicitud));
});


module.exports = Router;
//#endregion
