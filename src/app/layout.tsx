import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const siteUrl = "https://www.jaswantsaikrishna.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jaswant Sai Krishna — UX Designer & Researcher",
    template: "%s — Jaswant Sai Krishna",
  },
  description:
    "UX design and research portfolio of Jaswant Sai Krishna, a B.Des student in Bengaluru focused on accessibility, interaction design and evidence-led research.",
  applicationName: "Jaswant Sai Krishna Portfolio",
  authors: [{ name: "Jaswant Sai Krishna", url: siteUrl }],
  creator: "Jaswant Sai Krishna",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Jaswant Sai Krishna Portfolio",
    title: "Jaswant Sai Krishna — UX Designer & Researcher",
    description:
      "Research-led UX design work spanning accessibility, interaction design and real-world service experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaswant Sai Krishna — UX Designer & Researcher",
    description:
      "Research-led UX design work spanning accessibility, interaction design and real-world service experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jaswant Sai Krishna",
  url: siteUrl,
  image: `${siteUrl}/jaswant-profile.png`,
  jobTitle: "UX Designer & Researcher",
  homeLocation: { "@type": "Place", name: "Bengaluru, India" },
  sameAs: [
    "https://www.behance.net/jaswantsaikri/",
    "https://www.linkedin.com/in/jaswant-sk-843047302",
    "https://github.com/jaswantsaikrishna",
  ],
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Jaswant Sai Krishna Portfolio",
  url: siteUrl,
  inLanguage: "en-IN",
  author: { "@type": "Person", name: "Jaswant Sai Krishna" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" id="top">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personStructuredData, websiteStructuredData]).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
