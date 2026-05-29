import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Mouaz Amoud | AI Engineer Portfolio",
  description:
    "Portfolio of Mouaz Amoud, an AI engineer and Computer Engineering & Electronics double major focused on AI systems, automation, RAG pipelines, and research-driven machine learning."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} bg-background text-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
