const express = require('express');
const ServicioEmpleado = require('./../services/empleados.js');
const { Console } = require('console');

const Empleados = new ServicioEmpleado();

const Router = express.Router();


Router.get('/', async (solicitud, respuesta) => {
  const Empleados = await listadoDeEmpleados(solicitud.params.EmpleadoId);
  respuesta.json(Empleados);
});

Router.get('/:EmpleadoId', async (solicitud, respuesta) => {
  const Empleados = await listadoDeEmpleados(solicitud.params.EmpleadoId);
  respuesta.json(Empleados);
});

function listadoDeEmpleados(EmpleadoId) {
  return Empleados.Listar(EmpleadoId);
}

Router.post('/', async (solicitud, respuesta) => {

  const Empleado = {
    NombreEmpleado: solicitud.body.NombreEmpleado,
    TelefonoEmpleado: solicitud.body.TelefonoEmpleado
  }
  return Empleados.Agregar(Empleado)
});

Router.delete('/:EmpleadoId', async (solicitud, respuesta) => {

  respuesta.json(Empleados.Borrar(solicitud.params.EmpleadoId))

});

Router.put('/:EmpleadoId', async (solicitud, respuesta) => {
const { EmpleadoId } = solicitud.params;
const { NombreEmpleado } = solicitud.body;
respuesta.json(Empleados.Actualizar(EmpleadoId, NombreEmpleado));
});


module.exports = Router;
//#endregion
