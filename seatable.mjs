import { Base } from 'seatable-api';
import fs from 'fs';

const config = {
  server: 'https://cloud.seatable.cn',
  APIToken: process.env.APITOKEN,
};

const base = new Base(config);
await base.auth();

const data = await base.getMetadata();
fs.writeFileSync('./app/seatable/data.json', JSON.stringify(data), 'utf8');
