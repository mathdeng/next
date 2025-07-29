import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link className="text-blue-500" href="/yellow">黄页</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/qidian">起点</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/qidian-catalog-month">起点 目录 年月</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/colon">冒号</Link>
        </li>
      </ol>
    </main>
  );
}
