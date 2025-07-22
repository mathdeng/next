'use client'

export default function Page() {
  const now = new Date().toISOString();

  return (
    <div>
      <p>{now}</p>
    </div>
  );
}
