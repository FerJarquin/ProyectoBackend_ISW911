//Todos los endpoint de mi Cliente estan aqui 
const express = require("express"); 

const ServicioServicios = require ('/./../services/sevicios.js')

const Servicios = new ServicioServicios();


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

  return Servicios.Listar(ServicioId)
 
}

module.exports = Router; 