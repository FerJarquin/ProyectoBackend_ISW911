const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Empleados {

  constructor() {

  };

  async Agregar(Empleado) {
  
    try {
     await prisma.empleados.create({
        data: {
          NombreEmpleado: Empleado.NombreEmpleado,
          TelefonoEmpleado: parseInt(Empleado.TelefonoEmpleado)
        }
      });
    } catch (error) {
      console.error(`No se pudo insertar el Empleado ${Empleado} debido al error: ${error}`);
    }
  }; 

  async Actualizar(EmpleadoId, NombreEmpleado) {
    let resultado; 
    try {
      resultado = await prisma.Empleados.update({
        where: { EmpleadoId: parseInt(EmpleadoId) },
        data: { NombreEmpleado: NombreEmpleado },
      });
    } catch (error) {
      console.error(`No se pudo actualizar la Empleado ${EmpleadoId} debido al error: ${error}`);
    }
    return resultado;
  };

  async Borrar(EmpleadoId) {
    let resultado;
    try {
      resultado = await prisma.Empleados.delete({
        where: {
          EmpleadoId: parseInt(EmpleadoId),
        },
      });
    } catch (error) {
      console.error(`No se pudo borrar la Empleado ${EmpleadoId} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(EmpleadoId) {
    let Empleados;
    if (EmpleadoId === undefined) {
      Empleados = prisma.Empleados.findMany();
    } else {
      Empleados = prisma.Empleados.findMany({
        where: {
          EmpleadoId: parseInt(EmpleadoId),
        },
      });
    }
    return Empleados;
  };
}

module.exports = Empleados;