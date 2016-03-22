/**
 * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
 */

import {importTemplate} from './import-template';
import {getPlugins} from './get-plugins';

window.onload = function () {
  (function (document) {
    // Get plugins from GitHub
    getPlugins();

    // Template
    importTemplate('template/nav.html').then(content => {
      let items = content.querySelectorAll('li');
        [].forEach.call(items, item => {
          document.querySelector('nav').appendChild(item);
        });
    });

    importTemplate('template/header.html').then(content => {
      document.querySelector('header').appendChild(content.body);
    });

    importTemplate('template/footer.html').then(content => {
      document.querySelector('footer').appendChild(content.body);
    });
  })(document);
};