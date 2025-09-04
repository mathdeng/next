'use client'

import data from "@/app/json/qqread.json";
import { useSearchParams } from 'next/navigation';
import alasql from 'alasql';

interface Record {
  qqId: number;
  qidianId: number;
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
          <li key={record.qqId}>
            <span className="space-x-2">
              <a target="_blank" rel="noopener noreferrer" className="text-indigo-500" href={`https://book.qq.com/book-detail/${record.qqId}/`}>
                {record.bookName}
              </a>
              <a target="_blank" rel="noopener noreferrer" className="text-indigo-500" href={`https://ubook.reader.qq.com/book-comment/${record.qqId}`}>
                评论
              </a>
              <a target="_blank" rel="noopener noreferrer" className="text-indigo-500" href={`https://m.qidian.com/book/${record.qidianId}/`}>
                起点
              </a>
              <a target="_blank" rel="noopener noreferrer" className="text-indigo-500" href={`https://m.qidian.com/book/${record.qidianId}/catalog/`}>
                目录
              </a>
            </span>
          </li>
        ))}

      </ol>
    </div>
  );
}
