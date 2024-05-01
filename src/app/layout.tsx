"use client"

import "./globals.css";
import PorlaneType from 'next/font/local'
import VisbyType from 'next/font/local'
import { Poppins } from "next/font/google";

const PoppinsType = Poppins({
  display: 'swap',
   subsets: ["latin"],
  weight:['200','300', '400'],
  variable: '--font-poppins', });



const Porlane = PorlaneType({src:'./app/Fonts/Porlane-Regular.ttf',
display: 'swap',
variable: '--font-porlane',
})

const Visby = VisbyType({src:'./app/Fonts/VisbyRegular.ttf',
display: 'swap',
variable: '--font-visby',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Visby.variable} font-sans`}>{children}</body>
    </html>
  );
}
