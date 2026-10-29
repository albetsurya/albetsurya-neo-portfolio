import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import InteractiveCursor from "@/components/InteractiveCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileLayout from "@/components/MobileLayout";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Albet S. Kembara — Fullstack Web Developer",
    template: "%s | Albet S. Kembara",
  },
  description:
    "Portfolio of Albet S. Kembara, a fullstack web developer in Indonesia who builds performant, scalable web and mobile applications.",
  keywords: ["Fullstack Developer", "Next.js", "React", "Portfolio", "Indonesia"],
  openGraph: {
    title: "Albet S. Kembara — Fullstack Web Developer",
    description:
      "Performant, scalable web and mobile applications that people actually use.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${inter.variable} cursor-auto antialiased md:cursor-none`}
      >
        <InteractiveCursor />
        <Navbar />
        <MobileLayout>
          {children}
          <Footer />
        </MobileLayout>
      </body>
    </html>
  );
}
