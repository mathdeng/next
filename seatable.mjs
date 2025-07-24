import { Base } from 'seatable-api';
import fs from 'fs';

const config = {
  server: 'https://cloud.seatable.cn',
  APIToken: process.env.APITOKEN,
};

console.log('长度为：', process.env.A.length);

const base = new Base(config);
await base.auth();
console.log('auth success');

const data = await base.getMetadata();
console.log('getMetadata success');
fs.writeFileSync('./app/seatable/data.json', JSON.stringify(data), 'utf8');
