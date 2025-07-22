import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link href="/book">Book</Link>
        </li>
      </ol>
    </main>
  );
}
