const express = require("express"); 
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

const Router = express.Router();

Router.get("/", async (solicitud, respuesta) => {
  const Usuarios = await listadoDeUsuarios(solicitud.params.UsuarioId);
  respuesta.json(Usuarios);
});

Router.get("/:UsuarioId", async (solicitud, respuesta) => {
  const Usuarios = await listadoDeUsuarios(solicitud.params.UsuarioId);
  respuesta.json(Usuarios);
});


function listadoDeUsuarios(UsuarioId) {
  let Usuarios;
  if (UsuarioId === undefined) {
    Usuarios = prisma.Usuarios.findMany();
  } else {
    Usuarios = prisma.Usuarios.findMany({
      where: {
        UsuarioId: parseInt(UsuarioId),
      },
    });
  }
  return Usuarios;
}


module.exports = Router; 