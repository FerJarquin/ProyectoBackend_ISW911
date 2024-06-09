const express = require("express"); 
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const Router = express.Router();

Router.get("/", async (solicitud, respuesta) => {
  const Auditoria = await listadoDeAuditoria(solicitud.params.AuditoriaId);
  respuesta.json(Auditoria);
});

Router.get("/:AuditoriaId", async (solicitud, respuesta) => {
  const Auditoria = await listadoDeAuditoria(solicitud.params.AuditoriaId);
  respuesta.json(Auditoria);
});


function listadoDeAuditoria(AuditoriaId) {
  let Auditoria;
  if (AuditoriaId === undefined) {
    Auditoria = prisma.Auditoria.findMany();
  } else {
    Auditoria = prisma.Auditoria.findMany({
      where: {
        AuditoriaId: parseInt(AuditoriaId),
      },
    });
  }
  return Auditoria;
}


module.exports = Router; 