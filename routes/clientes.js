const express = require('express');
const ServicioCliente = require('./../services/clientes.js');
const { Console } = require('console');

const Clientes = new ServicioCliente();

const Router = express.Router();


Router.get('/', async (solicitud, respuesta) => {
  const Clientes = await listadoDeClientes(solicitud.params.ClienteId);
  respuesta.json(Clientes);
});

Router.get('/:ClienteId', async (solicitud, respuesta) => {
  const Clientes = await listadoDeClientes(solicitud.params.ClienteId);
  respuesta.json(Clientes);
});

function listadoDeClientes(ClienteId) {
  return Clientes.Listar(ClienteId);
}

Router.post('/', async (solicitud, respuesta) => {

  const Cliente = {
    NombreCliente: solicitud.body.NombreCliente,
    CedulaCliente: solicitud.body.CedulaCliente,
    TelefonoCliente: solicitud.body.TelefonoCliente,
    CorreoCliente: solicitud.body.CorreoCliente, 
    ContrasenaCliente: solicitud.body.ContrasenaCliente
  }
  return Clientes.Agregar(Cliente)
});

Router.delete('/:ClienteId', async (solicitud, respuesta) => {

  respuesta.json(Clientes.Borrar(solicitud.params.ClienteId))

});

Router.put('/:ClienteId', async (solicitud, respuesta) => {
  const { ClienteId } = solicitud.params;
  const { NombreCliente } = solicitud.body;
  respuesta.json(Clientes.Actualizar(ClienteId, NombreCliente));
});


module.exports = Router;
//#endregion
