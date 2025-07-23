import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link className="text-blue-500" href="/yellow">黄页</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/book">图书</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/movie">影视</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/dt">日期时间</Link>
        </li>
      </ol>
    </main>
  );
}
