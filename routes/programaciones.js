const express = require("express"); 
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const Router = express.Router();

Router.get("/", async (solicitud, respuesta) => {
  const Programacion = await listadoDeProgramacion(solicitud.params.ProgramacionId);
  respuesta.json(Programacion);
});

Router.get("/:ProgramacionId", async (solicitud, respuesta) => {
  const Programacion = await listadoDeProgramacion(solicitud.params.ProgramacionId);
  respuesta.json(Programacion);
});


function listadoDeProgramacion(ProgramacionId) {
  let Programacion;
  if (ProgramacionId === undefined) {
    Programacion = prisma.Programacion.findMany();
  } else {
    Programacion = prisma.Programacion.findMany({
      where: {
        ProgramacionId: parseInt(ProgramacionId),
      },
    });
  }
  return Programacion;
}


module.exports = Router; 