import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RDBlogue - Premium Interior Design & Furniture for Irish Homes",
  description: "Discover premium interior design and curated furniture collections for modern Irish homes. Explore timeless styles, contemporary elegance, and design guides.",
  keywords: "interior design, furniture, Irish homes, design guides, home decor, interiors",
  authors: [{ name: "RDBlogue Team" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://rdblogue.ie",
    siteName: "RDBlogue",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
