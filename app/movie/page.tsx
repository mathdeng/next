import fs from 'fs';

export default function Page() {
  const content = fs.readFileSync(process.cwd() + '/app/movie/data.csv', 'utf8');

  return (
    <div>
      <pre>{content}</pre>
    </div>
  );
}
