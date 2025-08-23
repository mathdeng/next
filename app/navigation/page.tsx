'use client'

import data from "@/app/json/navigation.json";

interface Record {
  url: string;
  name: string;
}

export default function Page() {
  
  return (
    <div>
      <ol className="list-decimal list-inside">
        {data.map((record: Record, index: number) => (
          <li key={index.toString()}>
            <a target="_blank" rel="noopener noreferrer" className="text-indigo-500" href={record.url}>
              {record.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
