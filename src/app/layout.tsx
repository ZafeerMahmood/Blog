import type { Metadata } from "next";
import { Providers } from "@/theme/provider";
import { Inter } from "next/font/google";
import Navbar from "@components/header";
import Footer from "@components/footer";
import "@css/globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://zafeer.vercel.app/"),
  title: {
    default: "Zafeer Mahmood",
    template: "%s | Zafeer Mahmood",
  },
  description: "Developer, engineer, and problem-solver.",
  openGraph: {
    title: "Zafeer Mahmood",
    description: "Developer, engineer, and problem-solver.",
    url: "https://zafeer.vercel.app/",
    siteName: "Zafeer Mahmood",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
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
    google: "LygeskwcMMSbv6QS0-zMXjLPHnS_YNCu4HAmugSOX0k",
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
