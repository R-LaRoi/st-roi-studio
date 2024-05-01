"use client"
import { Poppins } from "next/font/google";
import "./globals.css";

const PoppinsType = Poppins({
  display: 'swap',
   subsets: ["latin"],
  weight:['200','300', '400'],
  variable: '--font-poppins', });



  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${PoppinsType.variable}`}>{children}</body>
    </html>
  );
}
