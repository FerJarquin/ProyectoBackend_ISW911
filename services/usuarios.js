const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Usuarios {

  constructor() {

  };

  async Agregar(Usuario) {
  
    try {
     await prisma.usuarios.create({
        data: {
          NombreUsuario: Usuario.NombreUsuario,
          CorreoUsuario: Usuario.CorreoUsuario, 
          ContrasenaUsuario: Usuario.ContrasenaUsuario
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el Usuario ${Usuario} debido al error: ${error}`);
    }
   
  }; 

  async Actualizar(UsuarioId, NombreUsuario) {
    let resultado; 
    try {
      resultado = await prisma.usuarios.update({
        where: { UsuarioId: parseInt(UsuarioId) },
        data: { NombreUsuario: NombreUsuario },
      });
    } catch (error) {
      console.error(`No se pudo actualizar la Usuario ${UsuarioId} debido al error: ${error}`);
    }
    return resultado;
  };

  async Borrar(UsuarioId) {
    let resultado;
    try {
      resultado = await prisma.usuarios.delete({
        where: {
          UsuarioId: parseInt(UsuarioId),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar la Usuario ${UsuarioId} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(UsuarioId) {
    let Usuarios;
    if (UsuarioId === undefined) {
      Usuarios = prisma.usuarios.findMany();
    } else {
      Usuarios = prisma.usuarios.findMany({
        where: {
          UsuarioId: parseInt(UsuarioId),
        },
      });
    }
    return Usuarios;
  };
}

module.exports = Usuarios;