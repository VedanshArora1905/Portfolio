import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "Vedansh Arora | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Vedansh Arora — Full-Stack Developer, AI/ML Engineer, Ex-Goldman Sachs Analyst & IIT Ropar Researcher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body className="selection:bg-brutal-yellow selection:text-brutal-black font-body-md text-body-md">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
