/**
 * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
 */

const getPlugins = function () {
  return new Promise((resolve) => {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        let plugins = JSON.parse(xmlHttp.responseText);

        resolve(plugins);
      }
    };

    xmlHttp.open('GET', 'https://rawgit.com/the-junty/junty-plugins/master/plugins.json', true);
    xmlHttp.send();
  });
};

export {getPlugins};