const { PrismaClient } = require("@prisma/client");
const { Console } = require("console");

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

  async Actualizar(NombreEmpleado, TelefonoEmpleado, EmpleadoId) {
    let resultado; 
    try {
      resultado = await prisma.empleados.update({
        where: { EmpleadoId: parseInt(EmpleadoId) },
        data: {  
          NombreEmpleado: NombreEmpleado,
          TelefonoEmpleado: parseInt(TelefonoEmpleado)
         },
      });
    } catch (error) {
      console.error(`No se pudo actualizar la Empleado ${EmpleadoId} debido al error: ${error}`);
    }

  };

  async Borrar(EmpleadoId) {

    let resultado;
    console.log(EmpleadoId)
    try {

        // Eliminar registros dependientes primero
    await prisma.servicios.deleteMany({
      where: {
        EmpleadoId: parseInt(EmpleadoId),
      },
    });

      // Luego eliminar el registro principal
      resultado = await prisma.empleados.delete({
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