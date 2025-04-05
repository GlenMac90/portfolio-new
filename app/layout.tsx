import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glen McCallum",
  description: "Professional Web Developer Based In Bulgaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} antialiased bg-black flex flex-col items-center overscroll-none`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
