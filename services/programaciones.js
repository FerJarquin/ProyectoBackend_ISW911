const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Programacion {

  constructor() {

  };

  async Agregar(Programacion) {
  
    try {
     await prisma.programacion.create({
        data: {
            ActualizadoEn :new Date(),
            UsuarioId: parseInt(Programacion.UsuarioId), 
            EstadoProgramacion: "Pendiente", 
            SolicitudId: parseInt(Programacion.SolicitudId)
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el Programacion ${Programacion} debido al error: ${error}`);
    }
   
  }; 

  async Actualizar(ProgramacionId, Programacion) {
    let resultado; 
    try {
      resultado = await prisma.programacion.update({
        where: { ProgramacionId: parseInt(ProgramacionId) },
        data: { 
            ActualizadoEn :new Date(),
            UsuarioId: parseInt(Programacion.UsuarioId), 
            EstadoProgramacion: Programacion.EstadoProgramacion, 
            SolicitudId: parseInt(Programacion.SolicitudId)
         },
      });
    } catch (error) {
      console.error(`No se pudo actualizar la Programacion ${ProgramacionId} debido al error: ${error}`);
    }
    return resultado;
  };

  async Borrar(ProgramacionId) {
    let resultado;
    try {
      resultado = await prisma.Programacion.delete({
        where: {
          ProgramacionId: parseInt(ProgramacionId),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar la Programacion ${ProgramacionId} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(ProgramacionId) {
    let Programacion;
    if (ProgramacionId === undefined) {
      Programacion = prisma.Programacion.findMany();
    } else {
      Programacion = prisma.Programacion.findMany({
        where: {
          ProgramacionId: parseInt(ProgramacionId),
        },
      });
    }
    return Programacion;
  };

  async ListarEstadoProgramacion(SolicitudId) {
    let programacion;
    if (SolicitudId === undefined) {
      programacion = await prisma.Programacion.findMany({
        select: {
          EstadoProgramacion: true,
        },
      });
    } else {
      programacion = await prisma.Programacion.findMany({
        where: {
          SolicitudId: parseInt(SolicitudId),
        },
        select: {
          EstadoProgramacion: true,
        },
      });
    }
    return programacion;
  };
}






module.exports = Programacion;