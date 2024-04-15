import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@css/globals.css";
import Navbar from "@components/header";
import Footer from "@components/footer";
const inter = Inter({ subsets: ["latin"] });

import { Providers } from "@/theme/provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000/"),
  title: {
    default: "Zafeer Mahmood",
    template: "%s | Zafeer Mahmood",
  },
  description: "Developer, engineer, and problem-solver.",
  openGraph: {
    title: "Zafeer Mahmood",
    description: "Developer, engineer, and problem-solver.",
    url: "https://Localhost:3000/",
    siteName: "Zafeer Mahmood",
    locale: "en_US",
    type: "website",
  },
  robots: {
    // index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Zafeer Mahmood",
    card: "summary_large_image",
  },
  verification: {
    google: "",
  },
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
