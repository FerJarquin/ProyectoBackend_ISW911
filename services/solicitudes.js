const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

class Solicitud {

  constructor() {

  };

  async Agregar(Solicitud) {
  
    try {
      const nuevaSolicitud = await prisma.Solicitud.create({
        data: {
          FechaSolicitud: new Date(),
          FechaCita: new Date(Solicitud.FechaCita),
          ComentarioSolicitud: Solicitud.ComentarioSolicitud,
          ClienteId: parseInt(Solicitud.ClienteId),
          ServicioId: parseInt(Solicitud.ServicioId)
        }
      });
      return nuevaSolicitud; // Devolver el objeto de solicitud creado
    } catch (error) {
      console.error(`No se pudo insertar la Solicitud ${Solicitud} debido al error: ${error}`);
      throw error; // Re-lanzar el error para que pueda ser manejado por el código que llama
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

  async Listar(SolicitudId) {
    let solicitudes;
    if (SolicitudId === undefined) {
      solicitudes = await prisma.solicitud.findMany({
        include: {
          SolicitudCliente: {
            select: {
              NombreCliente: true
            }
          },

          ServcioSolicitud: {
            select: {
              NombreServicio: true
            }
          }, 

        }
      });
    } else {
      solicitudes = await prisma.solicitud.findMany({
        where: {
          SolicitudId: parseInt(SolicitudId),
        },
        include: {

          SolicitudCliente: {
            select: {
              NombreCliente: true
            }
          }, 

          ServcioSolicitud: {
            select: {
              NombreServicio: true
            }
          }, 

       


        }
      });
    }
  
    // Mapea las solicitudes para dar el formato deseado
    const Solicitud = solicitudes.map(solicitud => {
      return {
        SolicitudId: solicitud.SolicitudId,
        FechaSolicitud: solicitud.FechaSolicitud,
        FechaCita: solicitud.FechaCita,
        ComentarioSolicitud: solicitud.ComentarioSolicitud,
        ClienteId: solicitud.SolicitudCliente.NombreCliente, // Extrae solo el NombreCliente
        ServicioId: solicitud.ServcioSolicitud.NombreServicio, 
      };
    });
  
    return Solicitud;
  }
}

module.exports = Solicitud;