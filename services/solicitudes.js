//Todos los endpoint de mi Cliente estan aqui 
const express = require("express"); 

const Solicitudervicios = require ('/./../services/sevicios.js')

const Solicitud = new Solicitudervicios();


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

  return Solicitud.Listar(SolicitudId)
 
}

module.exports = Router; 