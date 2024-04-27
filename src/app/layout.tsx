import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cats gallery",
  description: "A gallery of cats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
