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
      [].forEach.call(content.body.childNodes, child => {
        document.querySelector('header').appendChild(child);
      });
    });

    importTemplate('template/footer.html').then(content => {
      [].forEach.call(content.body.childNodes, child => {
        document.querySelector('footer').appendChild(child);
      });
    });
  })(document);
};