import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Raleway } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://krema-artisan.ro'),
  title: {
    default: 'Krema – Artisan Dessert House | Popești-Leordeni',
    template: '%s | Krema Artisan Dessert House',
  },
  description:
    'Cofetărie artizanală în Popești-Leordeni. Torturi, prăjituri și deserturi fine realizate manual din ingrediente de calitate superioară.',
  keywords: [
    'cofetarie',
    'artizanal',
    'deserturi',
    'torturi',
    'prajituri',
    'macarons',
    'Popesti-Leordeni',
    'tort nunta',
    'tort botez',
    'Krema',
  ],
  authors: [{ name: 'Krema Artisan Dessert House' }],
  creator: 'Krema Artisan Dessert House',
  openGraph: {
    title: 'Krema – Artisan Dessert House',
    description:
      'Cofetărie artizanală în Popești-Leordeni. Torturi, prăjituri și deserturi fine realizate manual.',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Krema Artisan Dessert House',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krema – Artisan Dessert House',
    description: 'Cofetărie artizanală în Popești-Leordeni.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${playfair.variable} ${cormorant.variable} ${raleway.variable}`}
    >
      <body className="font-raleway antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
