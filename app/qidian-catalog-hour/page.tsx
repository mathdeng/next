'use client'

import alasql from 'alasql';
import { useState } from 'react';
import TablePage from './table';

interface Record {
  dt: number;
  cnt: number;
}

interface CS {
  uuid: number;
  cN: string;
  uT: string;
  cnt: number;
  cU: string;
  id: number;
  sS: number
}

export default function FormPage() {
  const [records, setRecords] = useState<Record[]>([]);

  function action(formData: FormData) {
    const text = formData.get('code')?.toString() ?? '';
    const match = text.match(/<script id="vite-plugin-ssr_pageContext" type="application\/json">(.+)<\/script>/);
    let json;
    if (match) {
      json = JSON.parse(match[1]);
    } else {
      return
    }

    let vs;
    let cs;
    try {
      vs = json['pageContext']['pageProps']['pageData']['vs'];
      cs = vs.map((x: {cs: CS[]}) => x['cs']).flat();
    } catch {
      return
    }
    
    const num = Array.from({length: 24}).map((_, i) => {
      return {dt: i}
    });
    const data = alasql(`
WITH h AS (
SELECT * FROM ?
),
b AS (
  SELECT 
    HOUR(uT) AS dt, 
    COUNT(*) AS cnt
  FROM ?
  GROUP BY HOUR(uT)
)
SELECT 
  h.dt AS dt, 
  COALESCE(b.cnt, 0) AS cnt
FROM h
LEFT JOIN b ON h.dt = b.dt
ORDER BY h.dt
`, [num, cs]) as Record[];

    setRecords(data);
  }

  return <div>
    <form action={action}>
      <div>
        <label>Code：
          <textarea 
            required name="code" rows={10} maxLength={500000} className="border border-gray-200 px-2 py-1" 
          />
        </label>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">提交</button>
    </form>
    <TablePage data={records} />
  </div>
}