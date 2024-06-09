//Todos los endpoint de mi Auditoria estan aqui 
const express = require("express"); 

const ServicioAuditoria = require ('/./../services/Auditoria.js')

const Auditoria = new ServicioAuditoria();


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

  return Auditoria.Listar(AuditoriaId)
 
}


module.exports = Router; 