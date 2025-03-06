import Navbar from "@/components/Navbar";
import "./globals.css";
import StoreProvider from "./StroreProvider";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Quick as a Click | Johar Basket',
  description: 'Buy groceries, cosmetics, stationaries.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>       
      </body>
    </html>
  );
}
