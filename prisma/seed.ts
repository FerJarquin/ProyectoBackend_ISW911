import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient({ log: ["query"] })


async function main() {
  
    //Creacion de muchos clientes
    await prisma.clientes.createMany({
        data: [
          {NombreCliente: 'Juan Perez',CedulaCliente: 12345678,TelefonoCliente: 987654321,CorreoCliente: 'juan.perez@example.com',ContrasenaCliente: 'password123'},
          {NombreCliente: 'Maria Gomez',CedulaCliente: 87654321,TelefonoCliente: 123456789,CorreoCliente: 'maria.gomez@example.com',ContrasenaCliente: 'password456'},
          {NombreCliente: 'Pedro Martinez',CedulaCliente: 23456789,TelefonoCliente: 987654322,CorreoCliente: 'pedro.martinez@example.com',ContrasenaCliente: 'password789'},
          {NombreCliente: 'Luisa Fernandez',CedulaCliente: 34567890,TelefonoCliente: 123456780,CorreoCliente: 'luisa.fernandez@example.com',ContrasenaCliente: 'password012'},
          {NombreCliente: 'Ana Torres', CedulaCliente: 45678901, TelefonoCliente: 987654323, CorreoCliente: 'ana.torres@example.com', ContrasenaCliente: 'password345'},
          {NombreCliente: 'Carlos Ramirez', CedulaCliente: 56789012, TelefonoCliente: 123456781, CorreoCliente: 'carlos.ramirez@example.com', ContrasenaCliente: 'password678'},
          {NombreCliente: 'Laura Sanchez', CedulaCliente: 67890123, TelefonoCliente: 987654324, CorreoCliente: 'laura.sanchez@example.com', ContrasenaCliente: 'password901'},
          {NombreCliente: 'Miguel Lopez', CedulaCliente: 78901234, TelefonoCliente: 123456782, CorreoCliente: 'miguel.lopez@example.com', ContrasenaCliente: 'password234'},
          {NombreCliente: 'Sofia Herrera', CedulaCliente: 89012345, TelefonoCliente: 987654325, CorreoCliente: 'sofia.herrera@example.com', ContrasenaCliente: 'password567'},
          {NombreCliente: 'Jorge Gutierrez', CedulaCliente: 90123456, TelefonoCliente: 123456783, CorreoCliente: 'jorge.gutierrez@example.com', ContrasenaCliente: 'password890'},
          {NombreCliente: 'Natalia Rios', CedulaCliente: 12345098, TelefonoCliente: 987654326, CorreoCliente: 'natalia.rios@example.com', ContrasenaCliente: 'password1234'},
          {NombreCliente: 'Andres Castro', CedulaCliente: 23456098, TelefonoCliente: 123456784, CorreoCliente: 'andres.castro@example.com', ContrasenaCliente: 'password5678'},
          {NombreCliente: 'Elena Vargas', CedulaCliente: 34567098, TelefonoCliente: 987654327, CorreoCliente: 'elena.vargas@example.com', ContrasenaCliente: 'password9012'},
          {NombreCliente: 'Ricardo Perez', CedulaCliente: 45678098, TelefonoCliente: 123456785, CorreoCliente: 'ricardo.perez@example.com', ContrasenaCliente: 'password3456'}
        ],
      })

    //Creacion de muchos empleados  
    await prisma.empleados.createMany({
        data: [
          {NombreEmpleado: 'Carlos Lopez',TelefonoEmpleado: 987654321},
          {NombreEmpleado: 'Juliana Ortiz', TelefonoEmpleado: 987654328},
          {NombreEmpleado: 'Fernando Alvarez', TelefonoEmpleado: 123456786},
          {NombreEmpleado: 'Carmen Delgado', TelefonoEmpleado: 987654329},
          {NombreEmpleado: 'Esteban Morales', TelefonoEmpleado: 123456787},
          {NombreEmpleado: 'Paola Rivas', TelefonoEmpleado: 987654330}
        ],
      })


    //Creacion de Servicios  
    await prisma.servicios.createMany({
        data: [
            {NombreServicio: 'Construcción General (Comercial y Residencial)', DescripcionServicio: 'Servicios integrales de construcción para proyectos comerciales y residenciales.', EmpleadosId: 1},
            {NombreServicio: 'Remodelación (Comercial y Residencial)', DescripcionServicio: 'Remodelación de espacios comerciales y residenciales, modernizando estructuras existentes.', EmpleadosId: 2},
            {NombreServicio: 'Pintura', DescripcionServicio: 'Servicios profesionales de pintura para interiores y exteriores.', EmpleadosId: 3},
            {NombreServicio: 'Sistemas Eléctricos', DescripcionServicio: 'Soluciones en sistemas eléctricos para edificaciones comerciales y residenciales.', EmpleadosId: 4},
            {NombreServicio: 'Comunicación y Redes', DescripcionServicio: 'Instalación y mantenimiento de sistemas de comunicación y redes.', EmpleadosId: 5},
            {NombreServicio: 'Sistema de bombeo', DescripcionServicio: 'Servicios especializados en sistemas de bombeo para proyectos civiles.', EmpleadosId: 6}
                
        ],
      })



}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })