import { Base } from 'seatable-api';
import fs from 'fs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

const config = {
  server: 'https://cloud.seatable.cn',
  APIToken: process.env.APITOKEN,
};

const base = new Base(config);
await base.auth();

dayjs.extend(utc);
dayjs.extend(timezone);
const now = dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss');
await base.appendRow('action', {dt: now});

let data;

data = await base.query('select * from qidian limit 1000');
fs.writeFileSync('./app/json/qidian.json', JSON.stringify(data), 'utf8');
data = await base.query('select * from yellow limit 1000');
fs.writeFileSync('./app/json/yellow.json', JSON.stringify(data), 'utf8');
data = await base.query('select * from action order by dt limit 10');
fs.writeFileSync('./app/json/action.json', JSON.stringify(data), 'utf8');
