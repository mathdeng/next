import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
