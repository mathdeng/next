import Link from 'next/link';
import data from './data.json'
export default function Home() {
  return (
    <main>
      <ol className="list-decimal list-inside">
        {data.map((item, index) => (
          <li key={index.toString()}>
            <Link className="text-blue-500" href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
