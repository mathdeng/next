export default function Page() {
  const num = Array.from({ length: 24 }).map((_, i) => i);
  return <ol className="list-decimal list-inside">
    {num.map(i => {
      const start = i.toString().padStart(2, '0');
      const end = ((i + 18) % 24).toString().padStart(2, '0');
      return <li key={i}>
        {start}:00 - {end}:00
      </li>
    })}
  </ol>
}
