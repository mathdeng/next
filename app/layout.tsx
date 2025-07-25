import type { Metadata } from 'next';
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: '吉星',
  description: '大吉大利',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="mb-4">
          <Link href="/">Home</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
