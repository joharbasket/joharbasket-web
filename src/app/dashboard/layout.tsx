//dashboard/layout.tsx


import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Johar Basket',
  description: 'Buy groceries, cosmetics, stationaries.',
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>

    );
}
