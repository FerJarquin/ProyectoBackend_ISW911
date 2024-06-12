-- CreateTable
CREATE TABLE `Clientes` (
    `ClienteId` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreCliente` VARCHAR(191) NOT NULL,
    `CedulaCliente` INTEGER NOT NULL,
    `TelefonoCliente` INTEGER NOT NULL,
    `CorreoCliente` VARCHAR(191) NOT NULL,
    `ContrasenaCliente` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ClienteId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empleados` (
    `EmpleadoId` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreEmpleado` VARCHAR(191) NOT NULL,
    `TelefonoEmpleado` INTEGER NOT NULL,

    PRIMARY KEY (`EmpleadoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Servicios` (
    `ServicioId` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreServicio` VARCHAR(191) NOT NULL,
    `DescripcionServicio` VARCHAR(191) NOT NULL,
    `EmpleadoId` INTEGER NOT NULL,

    PRIMARY KEY (`ServicioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solicitud` (
    `SolicitudId` INTEGER NOT NULL AUTO_INCREMENT,
    `FechaSolicitud` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `FechaCita` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ComentarioSolicitud` VARCHAR(191) NOT NULL,
    `ClienteId` INTEGER NOT NULL,
    `ServicioId` INTEGER NOT NULL,

    PRIMARY KEY (`SolicitudId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `UsuarioId` INTEGER NOT NULL AUTO_INCREMENT,
    `NombreUsuario` VARCHAR(191) NOT NULL,
    `CorreoUsuario` VARCHAR(191) NOT NULL,
    `ContrasenaUsuario` VARCHAR(191) NOT NULL,
    `Rol` ENUM('Administrador', 'Asistente', 'Auditoria') NOT NULL DEFAULT 'Asistente',

    PRIMARY KEY (`UsuarioId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Programacion` (
    `ProgramacionId` INTEGER NOT NULL AUTO_INCREMENT,
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `UsuarioId` INTEGER NOT NULL,
    `EstadoProgramacion` ENUM('Pendiente', 'Aprobada', 'Denegada') NOT NULL DEFAULT 'Pendiente',
    `SolicitudId` INTEGER NOT NULL,

    PRIMARY KEY (`ProgramacionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auditoria` (
    `AuditoriaId` INTEGER NOT NULL AUTO_INCREMENT,
    `UsuarioId` INTEGER NOT NULL,
    `Accion` VARCHAR(191) NOT NULL,
    `Fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`AuditoriaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Servicios` ADD CONSTRAINT `Servicios_EmpleadoId_fkey` FOREIGN KEY (`EmpleadoId`) REFERENCES `Empleados`(`EmpleadoId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Solicitud` ADD CONSTRAINT `Solicitud_ClienteId_fkey` FOREIGN KEY (`ClienteId`) REFERENCES `Clientes`(`ClienteId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Solicitud` ADD CONSTRAINT `Solicitud_ServicioId_fkey` FOREIGN KEY (`ServicioId`) REFERENCES `Servicios`(`ServicioId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Programacion` ADD CONSTRAINT `Programacion_SolicitudId_fkey` FOREIGN KEY (`SolicitudId`) REFERENCES `Solicitud`(`SolicitudId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Programacion` ADD CONSTRAINT `Programacion_UsuarioId_fkey` FOREIGN KEY (`UsuarioId`) REFERENCES `Usuarios`(`UsuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auditoria` ADD CONSTRAINT `Auditoria_UsuarioId_fkey` FOREIGN KEY (`UsuarioId`) REFERENCES `Usuarios`(`UsuarioId`) ON DELETE RESTRICT ON UPDATE CASCADE;
