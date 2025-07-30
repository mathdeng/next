'use client'

import data from "@/app/json/yellow.json";
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

  const collator = new Intl.Collator('zh-Hans-CN');
  const myData = data.toSorted((a, b) => collator.compare(a.name, b.name)) as Record[];
  const filteredData = alasql(
    `select * from ? where url like ? or name like ?`, 
    [myData, `%${search}%`, `%${search}%`]
  ) as Record[];
  
  return (
    <div>
      <form>
        <input type="search" name="search" className="border border-gray-300 px-2 py-1" defaultValue={search} />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1">Search</button>
      </form>
      <ol className="list-decimal list-inside">
        {filteredData.map((record: Record) => (
          <li key={record.id}>
            <a target="_blank" rel="noopener noreferrer" className="text-purple-500" href={record.url}>
              {record.name}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
