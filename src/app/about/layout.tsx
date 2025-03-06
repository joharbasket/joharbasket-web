import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About us | Johar Basket',
  description: 'Our Commitment to the Community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-grow w-full mx-auto px-6">{children}</main>
      <Footer />
    </div>
  );
}
