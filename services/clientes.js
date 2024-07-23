const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Clientes {

  constructor() {

  };

  async Agregar(Cliente) {

    try {
      await prisma.clientes.create({
        data: {
          NombreCliente: Cliente.NombreCliente,
          CedulaCliente: parseInt(Cliente.CedulaCliente),
          TelefonoCliente: parseInt(Cliente.TelefonoCliente),
          CorreoCliente: Cliente.CorreoCliente,
          ContrasenaCliente: Cliente.ContrasenaCliente
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el Cliente ${Cliente} debido al error: ${error}`);
    }

  };

  async Actualizar(ClienteId, NombreCliente,
    CedulaCliente, TelefonoCliente,
    CorreoCliente, ContrasenaCliente) {
    let resultado;
    try {
      resultado = await prisma.Clientes.update({
        where: { ClienteId: parseInt(ClienteId) },
        data: {
          NombreCliente: NombreCliente,
          CedulaCliente: parseInt(CedulaCliente),
          TelefonoCliente: parseInt(TelefonoCliente),
          CorreoCliente: CorreoCliente,
          ContrasenaCliente: ContrasenaCliente,

        },
      });
    } catch (error) {
      console.error(`No se pudo actualizar la Cliente ${ClienteId} debido al error: ${error}`);
    }
    return resultado;
  };

  async Borrar(ClienteId) {
    let resultado;
    try {

      // Luego eliminar el registro principal
      resultado = await prisma.Clientes.delete({
        where: {
          ClienteId: parseInt(ClienteId),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar la Cliente ${ClienteId} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(ClienteId) {
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
  };
}

module.exports = Clientes;