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
  title: "Mouaz Amoud | AI Engineer",
  description:
    "AI-focused Computer Engineering and Electronics double major building AI systems, automation workflows, RAG pipelines, and research-driven machine learning solutions.",
  openGraph: {
    title: "Mouaz Amoud | AI Engineer",
    description:
      "AI-focused Computer Engineering and Electronics double major building AI systems, automation workflows, RAG pipelines, and research-driven machine learning solutions.",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Mouaz Amoud | AI Engineer",
    description:
      "AI-focused Computer Engineering and Electronics double major building AI systems, automation workflows, RAG pipelines, and research-driven machine learning solutions."
  }
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
