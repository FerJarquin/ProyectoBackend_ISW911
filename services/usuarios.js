const { PrismaClient } = require("@prisma/client")
const bcrypt = require ('bcrypt');
const crypto = require ('crypto');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

class Usuarios {

  constructor() {

  };

  PalabraSecreta = "MiPalabraSecreta"; 


  async DesAutenticacion(CorreoUsuario) {
    try {
      await prisma.usuarios.update({
        where: { 
          CorreoUsuario: CorreoUsuario
        },
        data: {
          Token: "Sesión cerrada",
        },
      });
    } catch (err) {
    console.log(err);
    }
  }


  async ValidarToken(solicitud) {
   
    let token;
    try {
      token = solicitud.headers.authorization.split(" ")[1];
     
    } catch (err) {
      return err;
    }
    let Resultado;
    // Validación del token
    try {
      Resultado = await jwt.verify(token, this.PalabraSecreta);
    } catch(err) {
      return err;
    }
    // ¿El token brindado es del usuario?
    let Usuario = await prisma.usuarios.findFirst({
      where: {
        CorreoUsuario: Resultado.CorreoElectronico,
      },
    });
    if (Usuario.Token === token) {
      return Resultado;
    } else {
      return false;
    }
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
        UsuarioId:true, 
        CorreoUsuario: true
      }
    });

    let resultado 
    try {
      resultado =  await bcrypt.compare(ContrasenaUsuarioSinEncriptar, Usuario.ContrasenaUsuario); 
    } catch (err) {
      console.log(err);
    }

    if (resultado === true){

      return this.GenerarToken(Usuario.UsuarioId, Usuario.Rol, Usuario.CorreoUsuario)
    }
      else {
        return false; 
    }
    
  }; 


  async GenerarToken(UsuarioId, Rol, CorreoElectronico) {

    let token =  jwt.sign({ UsuarioId, Rol, CorreoElectronico}, this.PalabraSecreta, {expiresIn : '2m'}); 
 

    await prisma.usuarios.update({
      where: { UsuarioId: UsuarioId},
      data: { Token: token },
    });

    return token;
  }


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