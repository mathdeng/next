'use client'

import data from "./data.json";
import { useSearchParams } from 'next/navigation';
import alasql from 'alasql';

interface Record {
  id: number;
  url: string;
  name: string;
}

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const filteredData = alasql(
    `select * from ? where url like ? or name like ?`, 
    [data, `%${search}%`, `%${search}%`]
  ) as Record[];
  
  return (
    <div>
      <form>
        <input type="search" name="search" className="border border-gray-300 px-2 py-1" defaultValue={search} />
        <button type="submit">Search</button>
      </form>
      <ol>
        {filteredData.map((record: Record) => (
          <li key={record.id}>
            <a target="_blank" rel="noreferrer" className="text-blue-500" href={record.url}>
              {record.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
