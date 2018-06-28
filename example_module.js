import angular from 'angular';
import '../configuration/config.js';
import consultaDispositivosServicio from './service.js';

/**
 * @ngdoc overview
 * @name consultaDispositivosServicio
 * @description
 *
 * # Módulo consultaDispositivosServicio
 * 
 * Módulo que proporciona el servicio para consultar los distintos
 * tipos de dispositivos que se encuentran registrados.
 * 
 * # Servicios
 * - {@link consultaDispositivosServicio.consultaDispositivosServicio 
 * consultaDispositivosServicio}
 *
 * @example
 * <h2>Consultar la lista de tipos de dispositivos</h2>
 * <pre>
 * import angular from 'angular';
 * // importar el módulo para que pueda ser inyectado como dependencia
 * import './services/consulta-dispositivos/';
 * // crear el módulo de la aplicación e inyectar el módulo 
 * // consultaDispositivosServicio
 * angular.module('app', ['consultaDispositivosServicio'])
 *   .controller('mainCtrl', ['consultaDispositivosServicio',
 *    function(consultaDispositivosServicio) {
 *      
 *      consultaDispositivosServicio.obtenerTiposDispositivos()
 *        .then(function(dispositivos) {
 *          // La consulta se realizó exitosamente.
 *          console.log(dispositivos);
 *        }).catch(function(error) {
 *          // La consulta no se realizó exitosamente.
 *          console.log(error.mensaje, error.error);
 *        });
 *    }]);
 * </pre>
 */
export default angular
  .module('consultaDispositivosServicio', ['config'])
  .service('consultaDispositivosServicio', consultaDispositivosServicio)
  .name;
