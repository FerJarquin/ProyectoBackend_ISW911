//Todos los endpoint de mi Empleado estan aqui 
const express = require("express"); 

const ServicioEmpleados = require ('/./../services/empleados.js')

const Empleados = new ServicioEmpleados();

const prisma = new PrismaClient();

const Router = express.Router();

Router.get("/", async (solicitud, respuesta) => {
  const Empleados = await listadoDeEmpleados(solicitud.params.EmpleadosId);
  respuesta.json(Empleados);
});

Router.get("/:EmpleadosId", async (solicitud, respuesta) => {
  const Empleados = await listadoDeEmpleados(solicitud.params.EmpleadosId);
  respuesta.json(Empleados);
});


function listadoDeEmpleados(EmpleadosId) {

  return Empleados.Listar(EmpleadosId)

}

Router.post('/', async (solicitud, respuesta) => {
  const { Empleado } = solicitud.body;
  
  respuesta.json(Empleado.Agregar(solicitud.body.Empleado));
});



Router.delete('/:EmpleadoId', async (solicitud, respuesta) => {
  
  respuesta.json(Empleados.Borrar(solicitud.body.EmpleadoId));
  
});


Router.put('/:EmpleadosId', async (solicitud, respuesta) => {
  const { EmpleadosId } = solicitud.params;
  const { Empleado } = solicitud.body;
  
  respuesta.json(Empleado.Actualizar(EmpleadosId, Empleado));
});


module.exports = Router; 