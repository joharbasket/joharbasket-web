import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; 

export const metadata: Metadata = {
  title: 'Privacy Policy. | Johar Basket',
  description: 'Join Our Delivery Partner Program.',
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;

}>) {
    return (
        <div className="my-2 w-svw">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
