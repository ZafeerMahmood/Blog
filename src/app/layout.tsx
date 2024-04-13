import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@css/globals.css";
import Navbar from "@components/header";
import Footer from "@components/footer";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "@/theme/provider";

export const metadata: Metadata = {
  title: "Zafeers Portfolio+Blogs",
  description: "A portfolio and blog website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + ""}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
