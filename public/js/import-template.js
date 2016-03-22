/**
 * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
 */

const importTemplate = function (path) {
  return new Promise((resolve, reject) => {
    let link = document.createElement('link');

    link.setAttribute('href', path);
    link.setAttribute('rel', 'import');
    link.setAttribute('async', '');
    link.onload = function (e) {
      resolve(this.import);
    };

    document.head.appendChild(link);
  });
};

export {importTemplate};