const { PrismaClient } = require("@prisma/client")
const bcrypt = require ('bcrypt');
const crypto = require ('crypto');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

class Usuarios {

  constructor() {

  };

  PalabraSecreta = "MiPalabraSecreta"; 

  async Autenticacion(CorreoUsuario, ContrasenaUsuarioSinEncriptar)
  {
    let Usuario = await prisma.usuarios.findFirst({
      where : {
        CorreoUsuario: CorreoUsuario, 
      },
      select: {
        Rol:true, 
        ContrasenaUsuario: true
      }
    });
    let resultado = await bcrypt.compare(ContrasenaUsuarioSinEncriptar, Usuario.ContrasenaUsuario); 
    if (resultado === true){
      return jwt.sign({data : Usuario.Rol}, this.PalabraSecreta, {expiresIn : '1m'})
    }
      else {
        return false; 
      }
    
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