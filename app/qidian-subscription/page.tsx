export default function Page() {
  const num = Array.from({ length: 80 }).map((_, i) => i);
  return <ol className="list-decimal list-inside">
    {num.map(i => {
      const START = 2000;
      const cnt = START + i * 25;
      const price = Math.floor(cnt / 1000 * 4);
      return <li key={i}>
        {cnt} 字，{price} 分
      </li>
    })}
  </ol>
}
