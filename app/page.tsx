import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link href="/book">Book</Link>
        </li>
        <li>
          <Link href="/book.json">Book JSON</Link>
        </li>
        <li>
          <Link href="/movie.json">Movie JSON</Link>
        </li>
      </ol>
    </main>
  );
}
