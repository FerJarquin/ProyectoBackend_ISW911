//Todos los endpoint de mi Cliente estan aqui 
const express = require("express"); 

const ServicioClientes = require ('/./../services/clientes.js')

const Clientes = new ServicioClientes();


const prisma = new PrismaClient();

const Router = express.Router();

Router.get("/", async (solicitud, respuesta) => {
  const Clientes = await listadoDeClientes(solicitud.params.ClienteId);
  respuesta.json(Clientes);
});

Router.get("/:ClienteId", async (solicitud, respuesta) => {
  const Clientes = await listadoDeClientes(solicitud.params.ClienteId);
  respuesta.json(Clientes);
});

function listadoDeClientes(ClienteId) {

  return Clientes.Listar(ClienteId)
 
}


module.exports = Router; 