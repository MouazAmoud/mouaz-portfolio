import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-display"
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  preload: false
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "profile",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    firstName: "Mouaz",
    lastName: "Amoud"
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description
  }
};

export const viewport: Viewport = {
  themeColor: "#0A0E1A"
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/profile.jpg`,
  email: `mailto:${site.email}`,
  description: site.description,
  homeLocation: { "@type": "Place", name: site.location },
  affiliation: [
    { "@type": "CollegeOrUniversity", name: "Lebanese American University" },
    { "@type": "CollegeOrUniversity", name: "Lebanese University" }
  ],
  knowsAbout: [
    "Computer Engineering",
    "Software Engineering",
    "Machine Learning",
    "Computer Vision",
    "Retrieval-Augmented Generation",
    "Wireless Communications"
  ],
  sameAs: [site.linkedin, site.github]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
