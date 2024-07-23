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


Router.put('/:EmpleadoId', async (solicitud, respuesta) => {
  const { NombreEmpleado } = solicitud.body;
  const { TelefonoEmpleado } = solicitud.body;
  const { EmpleadoId } =  solicitud.params;
  respuesta.json(Empleados.Actualizar(NombreEmpleado, TelefonoEmpleado, EmpleadoId));
});

Router.delete('/:EmpleadoId', async (solicitud, respuesta) => {

  respuesta.json(Empleados.Borrar(solicitud.params.EmpleadoId))

});




module.exports = Router;
//#endregion
