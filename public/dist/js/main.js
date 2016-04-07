(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var importTemplate=function importTemplate(path){return new Promise(function(resolve,reject){var link=document.createElement('link');link.setAttribute('href',path);link.setAttribute('rel','import');link.onload=function(e){resolve(this.import)};link.onerror=function(e){reject(reject(e))};document.head.appendChild(link)})};exports.importTemplate=importTemplate},{}],2:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var getPlugins=function getPlugins(){return new Promise(function(resolve){var xmlHttp=new XMLHttpRequest();xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState===4&&xmlHttp.status===200){var plugins=JSON.parse(xmlHttp.responseText);resolve(plugins)}};xmlHttp.open('GET','https://rawgit.com/the-junty/junty-plugins/master/plugins.json',!0);xmlHttp.send()})};exports.getPlugins=getPlugins},{}],3:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});exports.loadPlugins=undefined;var _getPlugins=require('./get-plugins');function loadPlugins(){var appendPlugin=function appendPlugin(plugin){var li=document.createElement('li'),name=document.createElement('div'),link=document.createElement('a'),description=document.createElement('div');li.className='plugin';name.className='plugin-name';description.className='plugin-description';name.innerHTML=plugin.name;description.innerHTML=plugin.description;link.setAttribute('href',plugin.url);link.appendChild(name);li.appendChild(link);li.appendChild(description);document.getElementById('plugins-list').appendChild(li)};(0,_getPlugins.getPlugins)().then(function(plugins){plugins.forEach(function(plugin){appendPlugin(plugin)})})};exports.loadPlugins=loadPlugins},{"./get-plugins":2}],4:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:!0});exports.loadTemplates=undefined;var _tempimp=require('tempimp');function loadTemplates(){(0,_tempimp.importTemplate)('template/nav.html').then(function(content){var items=content.querySelectorAll('li');[].forEach.call(items,function(item){document.querySelector('nav').appendChild(item)})});(0,_tempimp.importTemplate)('template/header.html').then(function(content){[].forEach.call(content.body.childNodes,function(child){document.querySelector('header').appendChild(child)})});(0,_tempimp.importTemplate)('template/footer.html').then(function(content){[].forEach.call(content.body.childNodes,function(child){document.querySelector('footer').appendChild(child)})})};exports.loadTemplates=loadTemplates},{"tempimp":1}],5:[function(require,module,exports){'use strict';var _loadPlugins=require('./load-plugins');var _loadTemplates=require('./load-templates');window.onload=function(){(0,_loadPlugins.loadPlugins)();(0,_loadTemplates.loadTemplates)()}},{"./load-plugins":3,"./load-templates":4}]},{},[5])