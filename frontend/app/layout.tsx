import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artistify',
  description:
    'Our goal is to collaborate with businesses of every scale, guaranteeing access that will flourish in the digital realm.',
  keywords:
    'web solutions, digital experiences, UI/UX design, development support, business analyst, quality assurance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
