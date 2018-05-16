import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {renderModuleFactory} from '@angular/platform-server';
import * as express from 'express';
import {readFileSync} from 'fs';


const {AppServerModuleNgFactory} = require('./dist/angular-sandbox-server/main.js');


const app = express();

app.route('/').get((req, res) => {

});
