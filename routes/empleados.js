//Todos los endpoint de empleados estan aqui 
const express = require("express"); 

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const Router = express.Router();

Router.get("/", async (solicitud, respuesta) => {
  const Empleados = await listadoDeEmpleados(solicitud.params.EmpleadoId);
  respuesta.json(Empleados);
});

Router.get("/:EmpleadoId", async (solicitud, respuesta) => {
    const Empleados = await listadoDeEmpleados(solicitud.params.EmpleadoId);
    respuesta.json(Empleados);
 });

function listadoDeEmpleados(EmpleadoId) {
  let Empleados;
  if (EmpleadoId === undefined) {
    Empleados = prisma.empleados.findMany();
   
} else {
    Empleados = prisma.empleados.findMany({
      where: {
        EmpleadoId: parseInt(EmpleadoId),
      },
    });
  }
  return Empleados;
}

Router.post('/', async (solicitud, respuesta) => {
  const { Empleado } = solicitud.body;
  let resultado;
  try {
    resultado = await prisma.empleados.create({
      data: {
        NombreEmpleado: Empleado,
        TelefonoEmpleado: 61218474
      }
    });
  } catch (error) {
    console.error(`No se pudo insertar la Empleado ${Empleado} debido al error: ${error}`);
  }
  respuesta.json(resultado);
});



Router.delete('/:EmpleadoId', async (solicitud, respuesta) => {
  //const { EmpleadoId } = solicitud.params; //Si es en parametro se envia por la url
  const { EmpleadoId } = solicitud.body; //La solicitud seria asi en el url ⏬
  //*Content-Type: application/json {"EmpleadoId": 9}*/
let resultado;
  try {
    resultado = await prisma.empleados.delete({
      where: {
        EmpleadoId: parseInt(EmpleadoId),
      },
    });
  } catch (error) {
    console.error(`No se pudo borrar la Empleado ${EmpleadoId} debido al error: ${error}`);
  }
  respuesta.json(resultado);
});

Router.put('/:EmpleadoId', async (solicitud, respuesta) => {
  const { EmpleadoId } = solicitud.params;
  const { Empleado } = solicitud.body;
  let resultado;
  try {
    resultado = await prisma.Empleados.update({
      where: { EmpleadoId: parseInt(EmpleadoId) },
      data: { Empleado: Empleado },
    });
  } catch (error) {
    console.error(`No se pudo actualizar la Empleado ${EmpleadoId} debido al error: ${error}`);
  }
  respuesta.json(resultado);
});


module.exports = Router; 