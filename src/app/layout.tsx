import type { Metadata } from "next";
import { Providers } from "@/theme/provider";
import Navbar from "@components/header";
import Footer from "@components/footer";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "@css/globals.css";

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

const cx = (...classes: any[]) => classes.filter(Boolean).join(" ");
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(GeistSans.variable, GeistMono.variable)}
    >
      <body className="">
        <Providers>
          <Navbar />
          <div className="min-h-screen flex flex-col justify-between">
            <main>{children}</main>
            <Footer />
          </div>
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
