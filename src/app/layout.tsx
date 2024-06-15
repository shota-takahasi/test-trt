import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TRT World - Breaking News, Live Coverage, Opinions and Videos",
  description: "Breaking news, live coverage, opinions, features, in-depth analysis and videos from TRT World, 24/7.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) { 
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
