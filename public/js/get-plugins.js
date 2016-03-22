/**
 * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
 */

const appendPlugin = function (plugin) {
  let li = document.createElement('li'),
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

const getPlugins = function () {
  let plugins = [];
  
  const xmlHttp = new XMLHttpRequest();
    
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      plugins = JSON.parse(xmlHttp.responseText);

      plugins.forEach(plugin => {
        appendPlugin(plugin);
      });
    }
  };

  xmlHttp.open('GET', 'https://rawgit.com/the-junty/junty-plugins/master/plugins.json', true);
  xmlHttp.send();
};

export {getPlugins};