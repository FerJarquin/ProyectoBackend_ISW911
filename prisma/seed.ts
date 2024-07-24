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
          {NombreCliente: 'Ricardo Perez', CedulaCliente: 45678098, TelefonoCliente: 123456785, CorreoCliente: 'ricardo.perez@example.com', ContrasenaCliente: 'password3456'},
          {NombreCliente: 'Gabriela Torres', CedulaCliente: 56789023, TelefonoCliente: 987654328, CorreoCliente: 'gabriela.torres@example.com', ContrasenaCliente: 'password6789'},
          {NombreCliente: 'Roberto Sánchez', CedulaCliente: 67890134, TelefonoCliente: 123456786, CorreoCliente: 'roberto.sanchez@example.com', ContrasenaCliente: 'password90123'},
          {NombreCliente: 'Verónica Martínez', CedulaCliente: 78901245, TelefonoCliente: 987654329, CorreoCliente: 'veronica.martinez@example.com', ContrasenaCliente: 'password23456'},
          {NombreCliente: 'Alejandro López', CedulaCliente: 89012356, TelefonoCliente: 123456787, CorreoCliente: 'alejandro.lopez@example.com', ContrasenaCliente: 'password56789'},
          {NombreCliente: 'Marcela Herrera', CedulaCliente: 90123467, TelefonoCliente: 987654330, CorreoCliente: 'marcela.herrera@example.com', ContrasenaCliente: 'password89012'},
          {NombreCliente: 'Daniel Gutierrez', CedulaCliente: 12345089, TelefonoCliente: 123456788, CorreoCliente: 'daniel.gutierrez@example.com', ContrasenaCliente: 'password12345'},
          {NombreCliente: 'Carolina Soto', CedulaCliente: 23456789, TelefonoCliente: 987654331, CorreoCliente: 'carolina.soto@example.com', ContrasenaCliente: 'password67890'},
          {NombreCliente: 'Andrea Rodríguez', CedulaCliente: 34567890, TelefonoCliente: 123456789, CorreoCliente: 'andrea.rodriguez@example.com', ContrasenaCliente: 'password123456'},
          {NombreCliente: 'Hugo García', CedulaCliente: 45678901, TelefonoCliente: 987654332, CorreoCliente: 'hugo.garcia@example.com', ContrasenaCliente: 'password234567'},
          {NombreCliente: 'Laura Martínez', CedulaCliente: 56789012, TelefonoCliente: 123456790, CorreoCliente: 'laura.martinez@example.com', ContrasenaCliente: 'password345678'},
          {NombreCliente: 'Diego López', CedulaCliente: 67890123, TelefonoCliente: 987654333, CorreoCliente: 'diego.lopez@example.com', ContrasenaCliente: 'password456789'},
          {NombreCliente: 'Valeria Gutiérrez', CedulaCliente: 78901234, TelefonoCliente: 123456791, CorreoCliente: 'valeria.gutierrez@example.com', ContrasenaCliente: 'password567890'},
          {NombreCliente: 'Santiago Torres', CedulaCliente: 89012345, TelefonoCliente: 987654334, CorreoCliente: 'santiago.torres@example.com', ContrasenaCliente: 'password678901'},
          {NombreCliente: 'Camila Ramírez', CedulaCliente: 90123456, TelefonoCliente: 123456792, CorreoCliente: 'camila.ramirez@example.com', ContrasenaCliente: 'password789012'},
          {NombreCliente: 'Mariana Sánchez', CedulaCliente: 12345098, TelefonoCliente: 987654335, CorreoCliente: 'mariana.sanchez@example.com', ContrasenaCliente: 'password890123'},
          {NombreCliente: 'Sebastián Vargas', CedulaCliente: 23456098, TelefonoCliente: 123456793, CorreoCliente: 'sebastian.vargas@example.com', ContrasenaCliente: 'password901234'},
          {NombreCliente: 'Daniela Pérez', CedulaCliente: 34567098, TelefonoCliente: 987654336, CorreoCliente: 'daniela.perez@example.com', ContrasenaCliente: 'password012345'},
          {NombreCliente: 'Martín Gómez', CedulaCliente: 45678098, TelefonoCliente: 123456794, CorreoCliente: 'martin.gomez@example.com', ContrasenaCliente: 'password1234567'},
          {NombreCliente: 'Valentina López', CedulaCliente: 56789023, TelefonoCliente: 987654337, CorreoCliente: 'valentina.lopez@example.com', ContrasenaCliente: 'password2345678'},
          {NombreCliente: 'Felipe Castro', CedulaCliente: 67890134, TelefonoCliente: 123456795, CorreoCliente: 'felipe.castro@example.com', ContrasenaCliente: 'password3456789'},
          {NombreCliente: 'Natalia Rivas', CedulaCliente: 78901245, TelefonoCliente: 987654338, CorreoCliente: 'natalia.rivas@example.com', ContrasenaCliente: 'password4567890'},

        ],
      })

    //Creacion de muchos empleados  
    await prisma.empleados.createMany({
        data: [
          {NombreEmpleado: 'Carlos Lopez',TelefonoEmpleado: 987654321},
          {NombreEmpleado: 'Juliana Ortiz', TelefonoEmpleado: 987654328},
          {NombreEmpleado: 'Fernando Cespedes', TelefonoEmpleado: 123456786},
          {NombreEmpleado: 'Carmen Delgado', TelefonoEmpleado: 987654329},
          {NombreEmpleado: 'Esteban Morales', TelefonoEmpleado: 123456787},
          {NombreEmpleado: 'Paola Rivas', TelefonoEmpleado: 987654330}
        ],
      })


    //Creacion de Servicios  
    await prisma.servicios.createMany({
        data: [
            {NombreServicio: 'Construcción General (Comercial y Residencial)', DescripcionServicio: 'Servicios integrales de construcción para proyectos comerciales y residenciales.', EmpleadoId: 1},
            {NombreServicio: 'Remodelación (Comercial y Residencial)', DescripcionServicio: 'Remodelación de espacios comerciales y residenciales, modernizando estructuras existentes.', EmpleadoId: 2},
            {NombreServicio: 'Pintura', DescripcionServicio: 'Servicios profesionales de pintura para interiores y exteriores.', EmpleadoId: 3},
            {NombreServicio: 'Sistemas Eléctricos', DescripcionServicio: 'Soluciones en sistemas eléctricos para edificaciones comerciales y residenciales.', EmpleadoId: 4},
            {NombreServicio: 'Comunicación y Redes', DescripcionServicio: 'Instalación y mantenimiento de sistemas de comunicación y redes.', EmpleadoId: 5},
            {NombreServicio: 'Sistema de bombeo', DescripcionServicio: 'Servicios especializados en sistemas de bombeo para proyectos civiles.', EmpleadoId: 6}
                
        ],
      })

    //Creacion de Solicitudes  
    await prisma.solicitud.createMany({
        data: [
            {ComentarioSolicitud: 'Necesito pintar mi oficina con colores neutros para crear un ambiente profesional.', ClienteId: 1, ServicioId: 3},
            {ComentarioSolicitud: 'Quiero remodelar mi cocina para hacerla más funcional y moderna.', ClienteId: 2, ServicioId: 2},
            {ComentarioSolicitud: 'Busco pintar mi casa con colores vivos que reflejen mi personalidad.', ClienteId: 3, ServicioId: 3},
            {ComentarioSolicitud: 'Estoy interesado en construir una extensión en mi casa para tener más espacio.', ClienteId: 4, ServicioId: 1},
            {ComentarioSolicitud: 'Necesito renovar la fachada de mi negocio para atraer más clientes.', ClienteId: 5, ServicioId: 2},
            {ComentarioSolicitud: 'Busco pintar el exterior de mi casa para protegerla del clima.', ClienteId: 6, ServicioId: 3},
            {ComentarioSolicitud: 'Quiero construir una terraza en mi jardín para disfrutar del aire libre.', ClienteId: 7, ServicioId: 1},
            {ComentarioSolicitud: 'Necesito remodelar mi baño para adaptarlo a mis necesidades de movilidad.', ClienteId: 8, ServicioId: 2},
            {ComentarioSolicitud: 'Busco pintar las paredes de mi dormitorio con un diseño creativo.', ClienteId: 9, ServicioId: 3},
            {ComentarioSolicitud: 'Estoy interesado en construir una piscina en mi patio trasero.', ClienteId: 10, ServicioId: 1},
            {ComentarioSolicitud: 'Necesito remodelar mi oficina para optimizar el espacio de trabajo.', ClienteId: 11, ServicioId: 2},
            {ComentarioSolicitud: 'Busco pintar el techo de mi sala para darle un aspecto renovado.', ClienteId: 12, ServicioId: 3},
            {ComentarioSolicitud: 'Quiero construir una cochera adicional para mi casa.', ClienteId: 13, ServicioId: 1},
            {ComentarioSolicitud: 'Estoy interesado en remodelar mi sala de estar para hacerla más acogedora.', ClienteId: 14, ServicioId: 2},
            {ComentarioSolicitud: 'Quiero remodelar mi jardín para crear un espacio de relajación al aire libre.', ClienteId: 17, ServicioId: 2},
            {ComentarioSolicitud: 'Necesito instalar sistemas eléctricos nuevos en mi casa.', ClienteId: 15, ServicioId: 4},
            {ComentarioSolicitud: 'Quiero mejorar la red de comunicaciones de mi empresa.', ClienteId: 16, ServicioId: 5},
            {ComentarioSolicitud: 'Estoy buscando un sistema de bombeo para mi piscina.', ClienteId: 17, ServicioId: 6},
            {ComentarioSolicitud: 'Necesito una remodelación completa de mi cocina.', ClienteId: 18, ServicioId: 2},
            {ComentarioSolicitud: 'Busco pintar las paredes exteriores de mi tienda.', ClienteId: 19, ServicioId: 3},
            {ComentarioSolicitud: 'Quiero construir una nueva área de juego para mis hijos en el jardín.', ClienteId: 20, ServicioId: 1},
            {ComentarioSolicitud: 'Necesito una instalación eléctrica para mi nuevo local comercial.', ClienteId: 21, ServicioId: 4},
            {ComentarioSolicitud: 'Busco instalar un sistema de seguridad en mi hogar.', ClienteId: 22, ServicioId: 5},
            {ComentarioSolicitud: 'Quiero construir una pérgola en mi patio trasero.', ClienteId: 23, ServicioId: 1},
            {ComentarioSolicitud: 'Necesito remodelar mi baño principal.', ClienteId: 24, ServicioId: 2}

        ],
      })

    //Creacion de Usuarios  
    await prisma.usuarios.createMany({
        data: [
          { NombreUsuario: 'Fernando Cespedes', CorreoUsuario: 'admin@example.com', ContrasenaUsuario: 'admin123', Rol: 'Administrador' },
          { NombreUsuario: 'Laura García', CorreoUsuario: 'asistente@example.com', ContrasenaUsuario: 'asistente123', Rol: 'Asistente' },
          { NombreUsuario: 'Carlos Martínez', CorreoUsuario: 'auditor@example.com', ContrasenaUsuario: 'auditor123', Rol: 'Auditoria' },
          { NombreUsuario: 'María Rodríguez', CorreoUsuario: 'admin2@example.com', ContrasenaUsuario: 'admin1234', Rol: 'Administrador' },
          { NombreUsuario: 'Pedro López', CorreoUsuario: 'asistente2@example.com', ContrasenaUsuario: 'asistente1234', Rol: 'Asistente' },
          { NombreUsuario: 'Ana Fernández', CorreoUsuario: 'ana@example.com', ContrasenaUsuario: 'ana123', Rol: 'Administrador' },
          { NombreUsuario: 'José González', CorreoUsuario: 'jose@example.com', ContrasenaUsuario: 'jose123', Rol: 'Asistente' },
          { NombreUsuario: 'Marta Sánchez', CorreoUsuario: 'marta@example.com', ContrasenaUsuario: 'marta123', Rol: 'Auditoria' },
          { NombreUsuario: 'Luis Pérez', CorreoUsuario: 'luis@example.com', ContrasenaUsuario: 'luis123', Rol: 'Administrador' },
          { NombreUsuario: 'Elena Ramírez', CorreoUsuario: 'elena@example.com', ContrasenaUsuario: 'elena123', Rol: 'Asistente' },
          { NombreUsuario: 'Jorge Torres', CorreoUsuario: 'jorge@example.com', ContrasenaUsuario: 'jorge123', Rol: 'Auditoria' },
          { NombreUsuario: 'Carmen Díaz', CorreoUsuario: 'carmen@example.com', ContrasenaUsuario: 'carmen123', Rol: 'Administrador' },
          { NombreUsuario: 'Roberto Gómez', CorreoUsuario: 'roberto@example.com', ContrasenaUsuario: 'roberto123', Rol: 'Asistente' },
          { NombreUsuario: 'Isabel Ruiz', CorreoUsuario: 'isabel@example.com', ContrasenaUsuario: 'isabel123', Rol: 'Auditoria' },
          { NombreUsuario: 'Francisco Moreno', CorreoUsuario: 'francisco@example.com', ContrasenaUsuario: 'francisco123', Rol: 'Administrador' }
        ],
      })

    //Creacion de Programacion 
    await prisma.programacion.createMany({
        data: [
            {UsuarioId: 1, EstadoProgramacion: 'Pendiente',SolicitudId: 1},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 2},
            {UsuarioId: 3, EstadoProgramacion: 'Pendiente',SolicitudId: 3},
            {UsuarioId: 4, EstadoProgramacion: 'Pendiente',SolicitudId: 4},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 5},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 6},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 7},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 8},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 9},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 10},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 11},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 12},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 13},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 14},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 15},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 16},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 17},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 18},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 19},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 20},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 21},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 22},
            {UsuarioId: 5, EstadoProgramacion: 'Pendiente',SolicitudId: 23},
            {UsuarioId: 2, EstadoProgramacion: 'Pendiente',SolicitudId: 24}

        ],
      })

     //Creacion de Auditoria  
     await prisma.auditoria.createMany({
        data: [
            {UsuarioId: 1,Accion: 'Creación de usuario'},
            {UsuarioId: 3,Accion: 'Creación de reporte'},
            {UsuarioId: 4,Accion: 'Eliminar cliente'},
            {UsuarioId: 2,Accion: 'Corregir Solicitud'},
            {UsuarioId: 5,Accion: 'Editar cliente'},
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