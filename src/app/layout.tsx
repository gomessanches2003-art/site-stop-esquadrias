import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/config/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} — Esquadrias de Alumínio e Vidros em Cornélio Procópio-PR`,
    template: `%s — ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  keywords: [
    "esquadrias de alumínio Cornélio Procópio",
    "vidraçaria Cornélio Procópio",
    "portas e janelas de alumínio",
    "vidros sob medida",
    "box para banheiro",
    "guarda-corpo de vidro",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} — Esquadrias de Alumínio e Vidros em Cornélio Procópio-PR`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
