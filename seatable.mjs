import { Base } from 'seatable-api';
import fs from 'fs';

const config = {
  server: 'https://cloud.seatable.cn',
  APIToken: process.env.APITOKEN,
};

const base = new Base(config);
await base.auth();

let data;

data = await base.query('select * from qidian limit 1000');
fs.writeFileSync('./app/qidian/data.json', JSON.stringify(data), 'utf8');
data = await base.query('select * from yellow limit 1000');
fs.writeFileSync('./app/yellow/data.json', JSON.stringify(data), 'utf8');
