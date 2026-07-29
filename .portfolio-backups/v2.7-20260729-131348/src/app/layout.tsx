import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Jaswant Sai Krishna — UX Designer & Researcher",
    template: "%s — Jaswant Sai Krishna",
  },
  description: "UX design and research portfolio of Jaswant Sai Krishna.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" id="top">
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
