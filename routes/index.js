const rotuterEmpleados = require('./empleados'); 
const rotuterClientes = require('./clientes'); 
const rotuterServicios = require('./servicios'); 
const rotuterSolicitudes = require('./solicitudes'); 
const rotuterProgramaciones = require('./programaciones'); 
const rotuterUsuarios = require('./usuarios'); 
const rotuterAuditorias = require('./auditorias'); 

function routerAPI (app) {
    app.use('/empleados', rotuterEmpleados); 
    app.use('/clientes', rotuterClientes);
    app.use('/servicios', rotuterServicios);
    app.use('/solicitudes', rotuterSolicitudes);
    app.use('/programaciones', rotuterProgramaciones);
    app.use('/usuarios', rotuterUsuarios);
    app.use('/auditorias', rotuterAuditorias);
}

module.exports = routerAPI; 

