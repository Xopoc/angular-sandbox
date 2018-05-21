import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as express from 'express';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import {enableProdMode} from '@angular/core';

enableProdMode();

const app = express();
const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/angular-sandbox-server/main');
const distFolder = __dirname + '/dist/angular-sandbox';

app.engine('html', ngExpressEngine({
  bootstrap:  AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*.*', express.static(distFolder, {
  maxAge: '1y'
}));

app.get('*', (req, res) => {
  res.render('index', {req});
});

app.listen(9000, () => {
  console.log(`Angular Sandbox Node Express server listening on http://localhost:9000`);
});
