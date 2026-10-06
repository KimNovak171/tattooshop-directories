import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tattooshopdirectories.com"),
  title: {
    default: "TattooShopDirectories.com | Tattoo Shop Directory",
    template: "%s | TattooShopDirectories.com",
  },
  description:
    "TattooShopDirectories.com is a professional, easy-to-use tattoo shop directory helping clients find local tattoo shops, tattoo artists, tattoos, and body art across the United States and Canada.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TattooShopDirectories.com | Tattoo Shop Directory",
    description:
      "Trusted resource to explore and compare tattoo shops, tattoo artists, tattoos, and body art across North America.",
    url: "/",
    siteName: "TattooShopDirectories.com",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "TattooShopDirectories.com logo preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ELETMYV99N"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ELETMYV99N');
            `,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8586688641645596"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-surface-muted text-foreground">
          <header className="bg-brand-gradient w-full border-b-[3px] border-brand-champagne/60 text-brand-ink">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="text-[11px] font-bold tracking-[0.28em] sm:text-xs text-brand-ink transition-colors hover:opacity-80"
                  aria-label="TattooShopDirectories.com – go to homepage"
                >
                  TattooShopDirectories.com
                </Link>
                <nav className="flex items-center gap-4" aria-label="Main navigation">
                  <Link
                    href="/"
                    className="text-xs font-medium text-brand-ink/90 transition-colors hover:text-brand-ink"
                  >
                    USA
                  </Link>
                  <Link
                    href="/canada"
                    className="text-xs font-medium text-brand-ink/90 transition-colors hover:text-brand-ink"
                  >
                    Canada
                  </Link>
                  <Link
                    href="/blog"
                    className="text-xs font-medium text-brand-ink/90 transition-colors hover:text-brand-ink"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xs font-medium text-brand-ink/90 transition-colors hover:text-brand-ink"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/advertise"
                    className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-surface-muted"
                  >
                    Advertise
                  </Link>
                </nav>
              </div>
              <p className="ml-4 hidden max-w-xs text-right text-xs text-brand-ink/85 sm:block">
                Trusted tattoo shop directory for clients choosing their next piece.
              </p>
            </div>
          </header>

          <main className="flex-1">{children}</main>


          <footer className="w-full border-t border-teal/10 bg-surface">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-xs text-foreground/80 sm:px-6 lg:px-8">
              <p>
                © {new Date().getFullYear()} TattooShopDirectories.com. For
                informational purposes only – always verify licensing,
                certifications, and safety requirements with your local authority.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="hover:text-teal-soft">
                  About this directory
                </Link>
                <Link href="/contact" className="hover:text-teal-soft">
                  Contact
                </Link>
                <Link href="/directory" className="hover:text-teal-soft">
                  Full Directory
                </Link>
                <Link href="/privacy" className="hover:text-teal-soft">
                  Privacy &amp; terms
                </Link>
                <Link href="/advertise" className="hover:text-teal-soft">
                  Advertise
                </Link>
                <Link href="/advertise" className="hover:text-teal-soft">
                  For tattoo shops &amp; artists
                </Link>
                <Link href="/advertise" className="hover:text-teal-soft">
                  Featured Listing
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
