import { Base } from 'seatable-api';

export default async function () {
  const config = {
    server: 'https://cloud.seatable.cn',
    APIToken: process.env.APITOKEN,
  };

  const base = new Base(config);
  await base.auth();

  const data = await base.query('select * from 起点');

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}