'use client'

import data from "@/app/json/qidian.json";
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
            <span className="space-x-2">
              <a target="_blank" rel="noopener noreferrer" className="text-indigo-500" href={`https://m.qidian.com/book/${record.bookId}/`}>
                {record.bookName}
              </a>
              <a target="_blank" rel="noopener noreferrer" className="text-indigo-500" href={`https://m.qidian.com/book/${record.bookId}/catalog/`}>
                目录
              </a>
              <a target="_blank" rel="noopener noreferrer" className="text-indigo-500" href={`https://m.qidian.com/book/${record.bookId}/badge/`}>
                荣誉
              </a>
            </span>
          </li>
        ))}

      </ol>
    </div>
  );
}
