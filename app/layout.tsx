import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rick & Morty Explorer",
  description: "Browse Rick & Morty characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-10 bg-rm-morty-blue text-white shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
            {/* <span className="text-rm-rick-green text-2xl font-bold">&#x2727;</span> */}
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-rm-rick-green transition-colors">
              Rick & Morty Explorer
            </Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
