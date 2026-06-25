import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";
import { mainNav } from "@/lib/navigation";
import { services } from "@/features/services/services-data";

const poppins = Poppins({
  variable: "--font-app",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ" className={`${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <TopBar />
        <Header nav={mainNav} />
        <main className="flex-1">{children}</main>
        <Footer
          services={services.map((s) => ({ slug: s.slug, title: s.title }))}
        />
      </body>
    </html>
  );
}
