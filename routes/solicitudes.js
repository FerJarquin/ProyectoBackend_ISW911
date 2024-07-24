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
    ComentarioSolicitud: solicitud.body.ComentarioSolicitud, 
    ClienteId: solicitud.body.ClienteId, 
    ServicioId:solicitud.body.ServicioId
  }
  return Solicitudes.Agregar(Solicitud)
});


Router.put('/:SolicitudId', async (solicitud, respuesta) => {
  const Solicitud = {
    FechaSolicitud: solicitud.body.FechaSolicitud,
    FechaCita: solicitud.body.FechaCita,
    ComentarioSolicitud: solicitud.body.ComentarioSolicitud, 
    ClienteId: solicitud.body.ClienteId, 
    ServicioId:solicitud.body.ServicioId
  }
  const { SolicitudId } =  solicitud.params;
  respuesta.json(Solicitudes.Actualizar(Solicitud,SolicitudId));
  });
  


Router.delete('/:SolicitudId', async (solicitud, respuesta) => {

  respuesta.json(Solicitudes.Borrar(solicitud.params.SolicitudId))

});



module.exports = Router;
//#endregion
