/**
 * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
 */

import {loadPlugins} from './load-plugins';
import {loadTemplates} from './load-templates';

window.onload = function () {
  loadPlugins();

  loadTemplates();
};