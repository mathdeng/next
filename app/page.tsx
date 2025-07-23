import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link href="/yellow">黄页</Link>
        </li>
        <li>
          <Link href="/book">图书</Link>
        </li>
        <li>
          <Link href="/movie">影视</Link>
        </li>
        <li>
          <Link href="/dt">日期时间</Link>
        </li>
      </ol>
    </main>
  );
}
