'use client'

import {useState, useMemo} from 'react';
import TablePage from './table';
import TabsPage from './tabs';

interface Chapter {
  uuid: number;
  cN: string;
  uT: string;
  cnt: number;
  cU: string;
  id: number;
  sS: number;
}

export default function Page() {
  const [records, setRecords] = useState<Chapter[]>([]);
  const [status, setStatus] = useState<string>("-1");
  const [bookId, setBookId] = useState('');
  const [order, setOrder] = useState(false);

  function action(formData: FormData) {
    const text = formData.get('code')?.toString() ?? '';
    const match = text.match(/<script id="vite-plugin-ssr_pageContext" type="application\/json">(.+)<\/script>/);
    let json;
    if (match) {
      json = JSON.parse(match[1]);
    } else {
      return;
    }

    let volumns;
    let chapters;
    let bookId;
    try {
      volumns = json['pageContext']['pageProps']['pageData']['vs'];
      chapters = volumns.map((x: {cs: Chapter[]}) => x['cs']).flat();
      bookId = json['pageContext']['pageProps']['pageData']['bookId'];
    } catch {
      return;
    }

    setRecords(chapters);
    setBookId(bookId);
  }

  function onClick() {
    setOrder(prev => !prev);
  }

  const filteredRecords = useMemo(() => {
    let result;
    if (status === '-1') {
      result = records;
    } else {
      result = records.filter(item => item.sS === parseInt(status, 10));
    }

    if (order) {
      result = result.toReversed();
    }
    return result;
  }, [records, status, order])

  return <div>
    <form action={action}>
      <div>
        <label>Code：
          <textarea 
            required name="code" rows={10} maxLength={500000} className="border border-gray-200 px-2 py-1" 
          />
        </label>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">提交</button>
      <button type="button" className="bg-blue-400 text-white px-4 py-2" onClick={onClick}>排序</button>
    </form>
    <TabsPage onChange={setStatus} />
    <TablePage data={filteredRecords} bookId={bookId} />
  </div>
}
