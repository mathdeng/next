export default function Page() {
  const start = Array.from({ length: 24 }).map((_, i) => i);
  const end = start.map(i => (i + 18) % 24);
  return <ol className="list-decimal list-inside">
    {start.map(i => (
      <li key={i}>
        {i.toString().padStart(2, '0')}:00 - {end[i].toString().padStart(2, '0')}:00
      </li>
    ))}
  </ol>
}
