const express = require('express');
const ServicioUsuario = require('./../services/usuarios.js');

const Usuarios = new ServicioUsuario();

const Router = express.Router();


Router.get('/', async (solicitud, respuesta) => {
  const Usuarios = await listadoDeUsuarios(solicitud.params.UsuarioId);
  respuesta.json(Usuarios);
});

Router.get('/:UsuarioId', async (solicitud, respuesta) => {
  const Usuarios = await listadoDeUsuarios(solicitud.params.UsuarioId);
  respuesta.json(Usuarios);
});

function listadoDeUsuarios(UsuarioId) {
  return Usuarios.Listar(UsuarioId);
}

Router.post('/', async (solicitud, respuesta) => {
  return Usuarios.Agregar(solicitud.body.Usuario)

});

Router.delete('/:UsuarioId', async (solicitud, respuesta) => {

  respuesta.json(Usuarios.Borrar(solicitud.params.UsuarioId))

});

Router.put('/:UsuarioId', async (solicitud, respuesta) => {

  const { UsuarioId } = solicitud.params;
  const { Usuario } = solicitud.body;
  respuesta.json(Usuarios.Actualizar(UsuarioId, Usuario));

});

module.exports = Router;
//#endregion
