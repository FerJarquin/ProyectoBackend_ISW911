const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Auditoria {

  constructor() {

  };

  async Agregar(Auditoria) {
  
    try {
     await prisma.auditoria.create({
        data: {
          UsuarioId: Auditoria.UsuarioId,
          Accion: Auditoria.Accion, 
          Fecha: Auditoria.Fecha
         
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el Auditoria ${Auditoria} debido al error: ${error}`);
    }
   
  }; 

  async Actualizar(AuditoriaId, Accion) {
    let resultado; 
    try {
      resultado = await prisma.Auditoria.update({
        where: { AuditoriaId: parseInt(AuditoriaId) },
        data: { Accion: Accion },
      });
    } catch (error) {
      console.error(`No se pudo actualizar la Auditoria ${AuditoriaId} debido al error: ${error}`);
    }
    return resultado;
  };

  async Borrar(AuditoriaId) {
    let resultado;
    try {
      resultado = await prisma.Auditoria.delete({
        where: {
          AuditoriaId: parseInt(AuditoriaId),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar la Auditoria ${AuditoriaId} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(AuditoriaId) {
    let Auditoria;
    if (AuditoriaId === undefined) {
      Auditoria = prisma.Auditoria.findMany();
    } else {
      Auditoria = prisma.Auditoria.findMany({
        where: {
          AuditoriaId: parseInt(AuditoriaId),
        },
      });
    }
    return Auditoria;
  };
}

module.exports = Auditoria;