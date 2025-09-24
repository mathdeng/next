export default function Page() {
  const num = Array.from({ length: 25 }).map((_, i) => i);
  return <ol className="list-decimal list-inside">
    {num.map(i => {
      const START = 8;
      const price = START + i;
      const cnt = price / 4 * 1000;
      return <li key={i}>
        文章 {cnt} 字，价格 {price} 分
      </li>
    })}
  </ol>
}
