'use client'

import data from "./data.json";
import { useSearchParams } from 'next/navigation';
import alasql from 'alasql';

interface Book {
  name: string;
}

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const filteredData = alasql('select * from ? where name like ?', 
    [data, `%${search}%`]
  ) as Book[];
  
  return (
    <div>
      <form>
        <input type="search" name="search" defaultValue={search} />
        <button type="submit">Search</button>
      </form>
      <ol>
        {filteredData.map((book: Book, index: number) => (
          <li key={index.toString()}>
            {book.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
