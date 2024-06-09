
const express = require("express"); 
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const Router = express.Router();

Router.get("/", async (solicitud, respuesta) => {
  const Solicitud = await listadoDeSolicitud(solicitud.params.SolicitudId);
  respuesta.json(Solicitud);
});

Router.get("/:SolicitudId", async (solicitud, respuesta) => {
  const Solicitud = await listadoDeSolicitud(solicitud.params.SolicitudId);
  respuesta.json(Solicitud);
});


function listadoDeSolicitud(SolicitudId) {
  let Solicitud;
  if (SolicitudId === undefined) {
    Solicitud = prisma.Solicitud.findMany();
  } else {
    Solicitud = prisma.Solicitud.findMany({
      where: {
        SolicitudId: parseInt(SolicitudId),
      },
    });
  }
  return Solicitud;
}


module.exports = Router; 