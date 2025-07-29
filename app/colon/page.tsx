'use client'

import { useState } from 'react';

export default function Page() {
  const [result, setResult] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    setResult(value.replace(/(?<=：).+/g, ''));
  }
  return (
    <div>
      <label>请输入：<br />
        <textarea
          rows={10}
          onChange={handleChange}
          className="border border-gray-200 px-2 py-1"
        />
      </label>
      <br />
      <label>结果是：<br />
        <textarea
          rows={10}
          defaultValue={result}
          className="border border-gray-200 px-2 py-1"
        />
      </label>
    </div>
  )
}
