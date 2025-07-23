'use client'

import data from "./data.json";
import { useSearchParams } from 'next/navigation';
import alasql from 'alasql';

interface Record {
  id: number;
  bookId: number;
  bookName: string;
  authorName: string;
}

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const filteredData = alasql(
    `select * from ? where bookName like ? or authorName like ?`, 
    [data, `%${search}%`, `%${search}%`]
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
            <a target="_blank" rel="noopener noreferrer" className="text-blue-500" href={'https://m.qidian.com/book/' + record.bookId.toString()}>
              {record.bookName}
            </a>
          </li>
        ))}

      </ol>
    </div>
  );
}
