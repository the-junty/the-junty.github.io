import {getPlugins} from './get-plugins';

function loadPlugins () {
  // Get plugins from GitHub (for plugins.html)
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

  getPlugins().then(plugins => {
    plugins.forEach(plugin => {
      appendPlugin(plugin);
    });
  });
};

export {loadPlugins};