'use client'

import data from "@/app/json/action.json";

interface Record {
  dt: string;
  name: string | null;
}

export default function Page() {
  
  return (
    <div>
      <p>日期时间 操作</p>
      <ol className="list-decimal list-inside">
        {data.map((record: Record, index: number) => (
          <li key={index.toString()}>
            {record.dt} {record.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
