const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Solicitud {

  constructor() {

  };

  async Agregar(Solicitud) {
  
    try {
     await prisma.Solicitud.create({
        data: {
          FechaSolicitud:new Date(),
          FechaCita: new Date(2),
          ComentarioSolicitud: Solicitud.ComentarioSolicitud, 
          ClienteId: parseInt(Solicitud.ClienteId),
          ServicioId: parseInt(Solicitud.ServicioId)
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el Solicitud ${Solicitud} debido al error: ${error}`);
    }
   
  }; 

  async Actualizar(Solicitud,SolicitudId) {
    let resultado; 
    try {
      resultado = await prisma.Solicitud.update({
        where: { SolicitudId: parseInt(SolicitudId) },
        data: { 
          FechaSolicitud: Solicitud.FechaSolicitud,
          FechaCita: Solicitud.FechaCita,
          ComentarioSolicitud: Solicitud.ComentarioSolicitud, 
          ClienteId: parseInt(Solicitud.ClienteId),
          ServicioId: parseInt(Solicitud.ServicioId)
         },
      });
    } catch (error) {
      console.error(`No se pudo actualizar la Solicitud ${Solicitud} debido al error: ${error}`);
    }
    return resultado;
  };

  async Borrar(SolicitudId) {
    let resultado;
    try {
      resultado = await prisma.Solicitud.delete({
        where: {
          SolicitudId: parseInt(SolicitudId),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar la Solicitud ${SolicitudId} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(SolicitudId) {
    let Solicitud;
    if (SolicitudId === undefined) {
      Solicitud = prisma.solicitud.findMany();
    } else {
      Solicitud = prisma.solicitud.findMany({
        where: {
          SolicitudId: parseInt(SolicitudId),
        },
      });
    }
    return Solicitud;
  };
}

module.exports = Solicitud;