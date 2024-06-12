const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Servicios {

  constructor() {

  };

  async Agregar(Servicio) {
  
    try {
     await prisma.servicios.create({
        data: {
          NombreServicio: Servicio.NombreServicio,
          DescripcionServicio: Servicio.DescripcionServicio,
          EmpleadoId: Servicio.EmpleadoId
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el Servicio ${Servicio} debido al error: ${error}`);
    }
   
  }; 

  async Actualizar(ServicioId, NombreServicio) {
    let resultado; 
    try {
      resultado = await prisma.Servicios.update({
        where: { ServicioId: parseInt(ServicioId) },
        data: { NombreServicio: NombreServicio },
      });
    } catch (error) {
      console.error(`No se pudo actualizar la Servicio ${ServicioId} debido al error: ${error}`);
    }
    return resultado;
  };

  async Borrar(ServicioId) {
    let resultado;
    try {
      resultado = await prisma.Servicios.delete({
        where: {
          ServicioId: parseInt(ServicioId),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar la Servicio ${ServicioId} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(ServicioId) {
    let Servicios;
    if (ServicioId === undefined) {
      Servicios = prisma.Servicios.findMany();
    } else {
      Servicios = prisma.Servicios.findMany({
        where: {
          ServicioId: parseInt(ServicioId),
        },
      });
    }
    return Servicios;
  };
}

module.exports = Servicios;