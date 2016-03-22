(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
 */

var appendPlugin = function appendPlugin(plugin) {
  var li = document.createElement('li'),
      name = document.createElement('div'),
      link = document.createElement('a'),
      description = document.createElement('div');

  li.className = 'plugin';
  name.className = 'plugin-name';
  description.className = 'plugin-description';

  name.innerHTML = plugin.name;
  description.innerHTML = plugin.description;
  link.setAttribute('href', plugin.url);

  link.appendChild(name);
  li.appendChild(link);
  li.appendChild(description);

  document.getElementById('plugins-list').appendChild(li);
};

var getPlugins = function getPlugins() {
  var plugins = [];

  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      plugins = JSON.parse(xmlHttp.responseText);

      plugins.forEach(function (plugin) {
        appendPlugin(plugin);
      });
    }
  };

  xmlHttp.open('GET', 'https://rawgit.com/the-junty/junty-plugins/master/plugins.json', true);
  xmlHttp.send();
};

exports.getPlugins = getPlugins;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
 */

var importTemplate = function importTemplate(path) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');

    link.setAttribute('href', path);
    link.setAttribute('rel', 'import');
    link.setAttribute('async', '');
    link.onload = function (e) {
      resolve(this.import);
    };

    document.head.appendChild(link);
  });
};

exports.importTemplate = importTemplate;

},{}],3:[function(require,module,exports){
'use strict';

var _importTemplate = require('./import-template');

var _getPlugins = require('./get-plugins');

/**
 * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
 */

window.onload = function () {
  (function (document) {
    // Get plugins from GitHub
    (0, _getPlugins.getPlugins)();

    // Template
    (0, _importTemplate.importTemplate)('template/nav.html').then(function (content) {
      var items = content.querySelectorAll('li');
      [].forEach.call(items, function (item) {
        document.querySelector('nav').appendChild(item);
      });
    });

    (0, _importTemplate.importTemplate)('template/header.html').then(function (content) {
      document.querySelector('header').appendChild(content.body);
    });

    (0, _importTemplate.importTemplate)('template/footer.html').then(function (content) {
      document.querySelector('footer').appendChild(content.body);
    });
  })(document);
};

},{"./get-plugins":1,"./import-template":2}]},{},[3]);
