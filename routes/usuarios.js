const express = require('express');
const ServicioUsuario = require('./../services/usuarios.js');
const { Console } = require('console');

const Usuarios = new ServicioUsuario();

const Router = express.Router();



Router.get('/', async (solicitud, respuesta) => {
  const Usuarios = await listadoDeUsuarios(solicitud.params.UsuarioId);
  respuesta.json(Usuarios);
});


Router.post('/autenticar', async (solicitud, respuesta) => {
  respuesta.json(await Usuarios.Autenticacion(solicitud.body.CorreoUsuario, solicitud.body.ContrasenaUsuario));
});

Router.post('/validarToken', async (solicitud, respuesta) => {
  respuesta.json(await Usuarios.ValidarToken(solicitud));
});

Router.post("/desautenticar", async (solicitud, respuesta) => {
  respuesta.json(await Usuarios.DesAutenticacion(solicitud.body.CorreoUsuario));
});

Router.get('/:UsuarioId', async (solicitud, respuesta) => {
  const Usuarios = await listadoDeUsuarios(solicitud.params.UsuarioId);
  respuesta.json(Usuarios);
});

function listadoDeUsuarios(UsuarioId) {
  return Usuarios.Listar(UsuarioId);
}

Router.post('/', async (solicitud, respuesta) => {

  const Usuario = {
    NombreUsuario: solicitud.body.NombreUsuario,
    CorreoUsuario: solicitud.body.CorreoUsuario, 
    ContrasenaUsuario: solicitud.body.ContrasenaUsuario
  }
  return Usuarios.Agregar(Usuario)
});

Router.delete('/:UsuarioId', async (solicitud, respuesta) => {

  respuesta.json(Usuarios.Borrar(solicitud.params.UsuarioId))

});

Router.put('/:UsuarioId', async (solicitud, respuesta) => {
const { UsuarioId } = solicitud.params;

const Usuario = {
  NombreUsuario: solicitud.body.NombreUsuario,
  CorreoUsuario: solicitud.body.CorreoUsuario,
  ContrasenaUsuario: solicitud.body.ContrasenaUsuario, 
  Rol: solicitud.body.Rol
}

respuesta.json(Usuarios.Actualizar(UsuarioId, Usuario));
});


module.exports = Router;
//#endregion
