import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@css/globals.css";
import Navbar from "@components/header";
import Footer from "@components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen mt-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
