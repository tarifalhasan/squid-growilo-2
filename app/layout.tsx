import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import MobileMenu from '@/components/navbar/MobileMenu';

const inter = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  preload: false,
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MobileMenu />
        {children}
      </body>
    </html>
  );
}
