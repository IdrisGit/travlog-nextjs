import type { Metadata, Viewport } from 'next';
import { Inter, Nunito_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito_sans',
});

export const metadata: Metadata = {
  title: 'Travlog',
  description: 'Travel top destination of the world.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunitoSans.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
