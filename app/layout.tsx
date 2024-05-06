import type { Metadata } from "next";
import { Neuton } from "next/font/google";
import "./globals.css";

const inter = Neuton({ subsets: ["latin"],weight:'400' });

export const metadata: Metadata = {
  title: "vit-ride",
  description: "Your go-to solution for college campus ride booking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>{children}</body>
    </html>
  );
}
