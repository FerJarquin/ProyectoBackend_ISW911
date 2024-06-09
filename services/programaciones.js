//Todos los endpoint de mi Cliente estan aqui 
const express = require("express"); 

const Programacionervicios = require ('/./../services/sevicios.js')

const Programacion = new Programacionervicios();


const prisma = new PrismaClient();

const Router = express.Router();

Router.get("/", async (Programacion, respuesta) => {
  const Programacion = await listadoDeProgramacion(Programacion.params.ProgramacionId);
  respuesta.json(Programacion);
});

Router.get("/:ProgramacionId", async (Programacion, respuesta) => {
  const Programacion = await listadoDeProgramacion(Programacion.params.ProgramacionId);
  respuesta.json(Programacion);
});

function listadoDeProgramacion(ProgramacionId) {

  return Programacion.Listar(ProgramacionId)
 
}

module.exports = Router; 