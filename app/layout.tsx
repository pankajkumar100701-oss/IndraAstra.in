import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IndraAstra — Intelligence, Engineered Differently",
    template: "%s · IndraAstra",
  },
  description:
    "Research-driven AI company from Bengaluru. Lower AI costs, higher throughput and better accuracy for teams running AI in production.",
  metadataBase: new URL("https://indraastra.in"),
  openGraph: {
    title: "IndraAstra — Intelligence, Engineered Differently",
    description: "Lower AI Costs. Higher Throughput. Better Accuracy.",
    url: "https://indraastra.in",
    siteName: "IndraAstra",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
