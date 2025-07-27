import type { Metadata } from 'next';
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: '吉星',
  description: '吉星高照',
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
        <footer className="mt-4 text-center">
          天下大吉
        </footer>
      </body>
    </html>
  );
}
