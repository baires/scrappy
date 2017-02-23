import json2csv from 'json2csv';
import fs from 'fs';
import winston from 'winston';

import { fields, fieldNames, garbarinoJsonName } from './constants';

const data = require(`./data/${garbarinoJsonName}.json`);

const opts = {
  data,
  fields,
  fieldNames,
  quotes: '',
};

const result = json2csv(opts, { data, fields, fieldNames });

fs.writeFile(`./data/csv/garbarino/${garbarinoJsonName}.csv`, result, (err) => {
  if (err) throw err;
  winston.log('info', 'Garbarino File saved');
});
