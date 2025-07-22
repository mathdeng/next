import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link href="/book">Book</Link>
        </li>
        <li>
          <Link href="/movie">Movie</Link>
        </li>
      </ol>
    </main>
  );
}
