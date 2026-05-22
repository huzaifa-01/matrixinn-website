import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CursorBlob } from "@/components/CursorBlob";
import { RevealObserver } from "@/components/RevealObserver";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MatrixInn Solutions — Software, crafted.",
  description:
    "MatrixInn Solutions builds browser extensions, web apps, mobile apps, and SaaS products for teams who refuse to settle for good enough.",
  keywords: ["browser extensions", "web development", "mobile apps", "SaaS", "software development", "MatrixInn Solutions"],
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${jetbrainsMono.variable}`}>
        <CursorBlob />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
