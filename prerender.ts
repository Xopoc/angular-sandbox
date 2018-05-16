import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {renderModuleFactory} from '@angular/platform-server';
import {writeFileSync} from 'fs';


const {AppServerModuleNgFactory} = require('./dist/angular-sandbox-server/main.js');

renderModuleFactory(AppServerModuleNgFactory, {
  document: '<app-root></app-root>',
  url: '/'
})
  .then(html => {
    console.log('Yaay, prerender works fine');
    writeFileSync('./prerender.html', html);
  })
  .catch(error => {
    console.log('Something bad is happening:', error);
  });
