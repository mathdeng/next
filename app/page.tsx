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
          <Link className="text-blue-500" href="/qidian-catalog-design">起点 目录 排版</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/qidian-catalog-hour">起点 目录 小时</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/qidian-catalog-day">起点 目录 日期</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/qidian-catalog-month">起点 目录 年月</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/action">日志</Link>
        </li>
        <li>
          <Link className="text-blue-500" href="/colon">冒号</Link>
        </li>
      </ol>
    </main>
  );
}
