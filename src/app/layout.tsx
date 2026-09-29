import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsapp } from "@/components/FloatingWhatsapp";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/config/site";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} — Esquadrias, Portas, Janelas e Box de Vidro em Cornélio Procópio-PR`,
    template: `%s — ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  keywords: [
    "esquadrias de alumínio Cornélio Procópio",
    "vidraçaria Cornélio Procópio",
    "janela de alumínio",
    "porta de alumínio",
    "portas e janelas de alumínio",
    "box de vidro",
    "box para banheiro",
    "vidro temperado",
    "vidros sob medida",
    "guarda-corpo de vidro",
    "espelho sob medida",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} — Esquadrias, Portas, Janelas e Box de Vidro em Cornélio Procópio-PR`,
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
      className={`${barlowCondensed.variable} ${sourceSans.variable} h-full antialiased`}
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
