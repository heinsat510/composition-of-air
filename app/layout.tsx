import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Composition of Air",
  description: "Air composition interactive website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full py-4 bg-slate-900 text-slate-200 flex gap-6 justify-center text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="/oxygen">Oxygen</Link>
          <Link href="/nitrogen">Nitrogen</Link>
          <Link href="/carbon-dioxide">Carbon Dioxide</Link>
          <Link href="/argon">Argon</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}

