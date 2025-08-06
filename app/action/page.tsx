'use client'

import data from "@/app/json/action.json";

interface Record {
  dt: string;
}

export default function Page() {
  
  return (
    <div>
      <p>日期时间</p>
      <ol className="list-decimal list-inside">
        {data.map((record: Record, index: number) => (
          <li key={index.toString()}>
            {record.dt}
          </li>
        ))}
      </ol>
    </div>
  );
}
