import { Base } from 'seatable-api';
import fs from 'fs';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

const config = {
  server: 'https://cloud.seatable.cn',
  APIToken: process.env.SEATABLE_TOKEN,
};

const base = new Base(config);
await base.auth();

dayjs.extend(utc);
dayjs.extend(timezone);
const now = dayjs().tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss');
await base.appendRow('action', {dt: now, name: process.env.EVENT_NAME});

async function queryAndWrite(sql, tableName) {
  const data = await base.query(sql);
  fs.writeFileSync(`./app/json/${tableName}.json`, JSON.stringify(data), 'utf8');
}

let sql;

sql = 'SELECT * FROM qqread LIMIT 1000';
await queryAndWrite(sql, 'qqread');

sql = 'SELECT * FROM yellow LIMIT 1000';
await queryAndWrite(sql, 'yellow');

sql = 'SELECT * FROM action ORDER BY dt DESC LIMIT 10';
await queryAndWrite(sql, 'action');

sql = 'SELECT * FROM log ORDER BY dt DESC LIMIT 10';
await queryAndWrite(sql, 'log');
