
const express = require("express"); 
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const Router = express.Router();

Router.get("/", async (solicitud, respuesta) => {
  const Servicios = await listadoDeServicios(solicitud.params.ServicioId);
  respuesta.json(Servicios);
});

Router.get("/:ServicioId", async (solicitud, respuesta) => {
  const Servicios = await listadoDeServicios(solicitud.params.ServicioId);
  respuesta.json(Servicios);
});


function listadoDeServicios(ServicioId) {
  let Servicios;
  if (ServicioId === undefined) {
    Servicios = prisma.Servicios.findMany();
  } else {
    Servicios = prisma.Servicios.findMany({
      where: {
        ServicioId: parseInt(ServicioId),
      },
    });
  }
  return Servicios;
}


module.exports = Router; 