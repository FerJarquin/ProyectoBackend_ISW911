const express = require("express"); 
const { PrismaClient } = require("@prisma/client")

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
  let Clientes;
  if (ClienteId === undefined) {
    Clientes = prisma.Clientes.findMany();
  } else {
    Clientes = prisma.Clientes.findMany({
      where: {
        ClienteId: parseInt(ClienteId),
      },
    });
  }
  return Clientes;
}


module.exports = Router; 