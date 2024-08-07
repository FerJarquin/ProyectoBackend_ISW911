const { PrismaClient } = require("@prisma/client")
const bcrypt = require ('bcrypt');
const { Console } = require("console");
const crypto = require ('crypto');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

class Usuarios {

  constructor() {

  };

  PalabraSecreta = "MiPalabraSecreta"; 

  async ValidarToken(solicitud, PalabraSecreta) {
     let Resultado = await jwt.verify(solicitud.headers.authorization.split(" ")[1],"MiPalabraSecreta");
    return Resultado;
  }


  async Autenticacion(CorreoUsuario, ContrasenaUsuarioSinEncriptar)
  {
    let Usuario = await prisma.usuarios.findFirst({
      where : {
        CorreoUsuario: CorreoUsuario, 
      },
      select: {
        Rol:true, 
        ContrasenaUsuario: true, 
        UsuarioId:true
      }
    });

    let resultado = await bcrypt.compare(ContrasenaUsuarioSinEncriptar, Usuario.ContrasenaUsuario); 
    
    if (resultado === true){

    const token = jwt.sign({ UsuarioId: Usuario.UsuarioId, Rol: Usuario.Rol}, this.PalabraSecreta, {expiresIn : '2m'})

    // Opcional: almacenar el token en la base de datos
    await prisma.usuarios.update({
      where: { UsuarioId: Usuario.UsuarioId},
      data: { Token: token },
    });
    return token
    }
      else {
        return false; 
      }
    
  }; 


  async Agregar(Usuario) {
    const contrasenaEncriptada = await bcrypt.hash(Usuario.ContrasenaUsuario, 10);
    try {
     await prisma.usuarios.create({
        data: {
          NombreUsuario: Usuario.NombreUsuario,
          CorreoUsuario: Usuario.CorreoUsuario, 
          ContrasenaUsuario: contrasenaEncriptada,
          Token:""
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el Usuario ${Usuario} debido al error: ${error}`);
    }
   
  }; 

  async Actualizar(UsuarioId, Usuario) {
    let resultado; 
    try {
      resultado = await prisma.usuarios.update({
        where: { UsuarioId: parseInt(UsuarioId) },
        data: { 
          NombreUsuario: Usuario.NombreUsuario,
          CorreoUsuario: Usuario.CorreoUsuario, 
          ContrasenaUsuario: Usuario.ContrasenaUsuario,
          Rol: Usuario.Rol
         },
      });
    } catch (error) {
      console.error(`No se pudo actualizar la Usuario ${Usuario} debido al error: ${error}`);
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