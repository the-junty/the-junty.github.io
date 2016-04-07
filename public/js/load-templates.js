import {importTemplate} from 'tempimp';

function loadTemplates () {
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
};

export {loadTemplates};