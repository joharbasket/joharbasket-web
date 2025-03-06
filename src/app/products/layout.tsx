import Tabmenu from '@/components/Products/TabMenu';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Products | Johar Basket',
  description: 'Buy groceries, cosmetics, stationaries.',
}
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;

}>) {
    return (
        <div className="my-2 w-svw">
            <Tabmenu />
            {children}
        </div>
    );
}
