//Todos los endpoint de mi Usuario estan aqui 
const express = require("express"); 

const ServicioUsuarios = require ('/./../services/Usuarios.js')

const Usuarios = new ServicioUsuarios();


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

  return Usuarios.Listar(UsuarioId)
 
}


module.exports = Router; 