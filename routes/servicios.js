const express = require('express');
const ServicioServicio = require('./../services/servicios.js');
const { Console } = require('console');

const Servicios = new ServicioServicio();

const Router = express.Router();


Router.get('/', async (solicitud, respuesta) => {
  const Servicios = await listadoDeServicios(solicitud.params.ServicioId);
  respuesta.json(Servicios);
});

Router.get('/:ServicioId', async (solicitud, respuesta) => {
  const Servicios = await listadoDeServicios(solicitud.params.ServicioId);
  respuesta.json(Servicios);
});

function listadoDeServicios(ServicioId) {
  return Servicios.Listar(ServicioId);
}

Router.post('/', async (solicitud, respuesta) => {

  const Servicio = {
    NombreServicio: solicitud.body.NombreServicio,
    DescripcionServicio: solicitud.body.DescripcionServicio,
    EmpleadoId: solicitud.body.EmpleadoId
  }
  return Servicios.Agregar(Servicio)
});

Router.delete('/:ServicioId', async (solicitud, respuesta) => {

  respuesta.json(Servicios.Borrar(solicitud.params.ServicioId))

});

Router.put('/:ServicioId', async (solicitud, respuesta) => {
const { ServicioId } = solicitud.params;
const { NombreServicio } = solicitud.body;
respuesta.json(Servicios.Actualizar(ServicioId, NombreServicio));
});


module.exports = Router;
//#endregion
