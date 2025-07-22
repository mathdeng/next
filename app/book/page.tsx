import data from "./data.json";

interface Book {
  name: string;
}

export default function Page() {
  return (
    <div>
      <ol>
        {data.map((book: Book, index: number) => (
          <li key={index.toString()}>{book.name}</li>
        ))}
      </ol>
    </div>
  );
}
