'use client'

import data from "./data.json";
import { useSearchParams } from 'next/navigation';

interface Book {
  name: string;
}

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const filteredData = data.filter((book: Book) => book.name.toLowerCase().includes(search.toLowerCase()));
  
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
