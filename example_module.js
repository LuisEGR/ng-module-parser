// Módulos
import angular from 'angular';
import angularFilter from 'angular-filter';
import modal from '../modal/module';
import '../../services/acceso-cliente/module';
import dragDropRelation from '../drag-drop-relation/module';
import inputTypeMonto from '../../directives/input-type-monto/module';
import pubSub from '../../services/pub-sub/module.js';
import stepper from '../stepper/module';
import impresion from '../impresion/module.js';
import filtroBigNumber from '../../filters/big-number';
import inputMenorQue from '../../directives/input-menor-que';

import configuracionTipoUsuario from './configuracion-tipo-usuario';
import configuracionCuentas from './configuracion-cuentas';
import configuracionEmpresas from './configuracion-empresas';
import configuracionFacultades from './configuracion-facultades';
import configuracionFirmantes from './configuracion-firmantes';
import configuracionUsuariosDestino from './configuracion-usuarios-destino';
// Componentes
import usuariosFacultamientoComp from './component';
import aplicacionFacultamiento from './aplicacion-facultamiento/component';
import montosPorCuenta from './montos-por-cuenta/component';
import limitesOperables from './limites-operables/component';
import firmantesPersonas from './firmantes-personas/component';

// Servicios
import usuariosFacultamientoServ
  from '../../services/usuarios-facultamiento/module';
import perfilesPatron from '../../services/perfiles-patron/';
import facultades from '../../services/facultades';
import consultaFirmantes from '../../services/consulta-firmantes/';
import etiquetas from './../../services/etiquetas';

export default angular
  .module('usuariosFacultamiento', [
    'accesoCliente',
    angularFilter,
    impresion,
    stepper,
    modal,
    pubSub,
    dragDropRelation,
    inputTypeMonto,
    usuariosFacultamientoServ,
    configuracionTipoUsuario,
    configuracionCuentas,
    configuracionEmpresas,
    configuracionFacultades,
    configuracionFirmantes,
    configuracionUsuariosDestino,
    perfilesPatron,
    facultades,
    consultaFirmantes,
    etiquetas,
    filtroBigNumber,
    inputMenorQue,
  ])
  .component('usuariosFacultamiento', usuariosFacultamientoComp)
  .component('firmantesPersonas', firmantesPersonas)
  .component('montosPorCuenta', montosPorCuenta)
  .component('limitesOperables', limitesOperables)
  .component('aplicacionFacultamiento', aplicacionFacultamiento)
  .name;
