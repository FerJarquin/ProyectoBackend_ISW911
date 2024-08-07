const express = require('express');
const ServicioSolicitud = require('./../services/solicitudes.js');
const ServicioProgramacion = require('./../services/programaciones.js');

const Solicitudes = new ServicioSolicitud();
const Programaciones = new ServicioProgramacion();

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
    ServicioId:solicitud.body.ServicioId,
    FechaCita:solicitud.body.FechaCita
  }

  try {
    // Agregar la solicitud
    const nuevaSolicitud = await Solicitudes.Agregar(Solicitud);

    console.log(nuevaSolicitud)

    // Si la solicitud se agregó exitosamente, agregar la programación
    const ProgramacionData = {
      ActualizadoEn: new Date(),
      UsuarioId: 8,
      SolicitudId: nuevaSolicitud.SolicitudId // Suponiendo que el método Agregar devuelve el ID de la solicitud creada
    };

    await Programaciones.Agregar(ProgramacionData);
    respuesta.status(201).json({ mensaje: 'Solicitud y programación creadas con éxito' });
  
  } catch (error) {
    console.error(`Error al crear la solicitud o programación: ${error}`);
    respuesta.status(500).json({ mensaje: 'Error al crear la solicitud o programación' });
  }


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
