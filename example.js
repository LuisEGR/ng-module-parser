const fs = require('fs');
const moduleParser = require('./index.js');
let program = fs.readFileSync('./example_module.js', 'utf8');

let infoModule = moduleParser.parse(program);
console.log(JSON.stringify(infoModule, null, 2));

// {
// "name": "usuariosFacultamiento",
// "components": [
//     "usuariosFacultamiento",
//     "firmantesPersonas",
//     "montosPorCuenta",
//     "limitesOperables",
//     "aplicacionFacultamiento"
// ],
// "dependencies": [
//     "accesoCliente",
//     "angularFilter",
//     "impresion",
//     "stepper",
//     "modal",
//     "pubSub",
//     "dragDropRelation",
//     "inputTypeMonto",
//     "usuariosFacultamientoServ",
//     "configuracionTipoUsuario",
//     "configuracionCuentas",
//     "configuracionEmpresas",
//     "configuracionFacultades",
//     "configuracionFirmantes",
//     "configuracionUsuariosDestino",
//     "perfilesPatron",
//     "facultades",
//     "consultaFirmantes",
//     "etiquetas",
//     "filtroBigNumber",
//     "inputMenorQue"
// ],
// "directives": [],
// "services": [],
// "factories": [],
// "constants": []
// }