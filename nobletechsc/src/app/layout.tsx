import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { META, COMPANY } from '../lib/constants';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = META.url.replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: META.defaultTitle,
    template: `%s | ${COMPANY.shortName}`
  },
  description: META.description,
  keywords: META.keywords.concat(['software development Ghana', 'Web development company in Ghana','technology solutions Accra','IT consulting Ghana','cloud solutions Ghana', 'UI/UX design Ghana', 'digital marketing Ghana', 'mobile app development Ghana', 'Professional website builders in Accra', 'Best web design company in Accra', ]),
  alternates: { canonical: siteUrl },
  openGraph: {
    title: META.defaultTitle,
    description: META.description,
    url: siteUrl,
    siteName: COMPANY.name,
    type: 'website',
    locale: 'en_GB'
  },
  twitter: {
    card: 'summary_large_image',
    title: META.defaultTitle,
    description: META.description
  },
  icons: {
    icon: '/ntsc_logo.png',
    shortcut: '/ntsc_logo.png',
    apple: '/ntsc_logo.png',
    other: [{ rel: 'mask-icon', url: '/ntsc_logo.png' }]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          // Using dangerouslySetInnerHTML to inject structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY.name,
              url: META.url,
              logo: `${META.url.replace(/\/$/, '')}/ntsc_logo.png`,
              // foundingDate intentionally omitted per preference
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Accra',
                addressCountry: 'GH'
              },
              contactPoint: [{
                '@type': 'ContactPoint',
                telephone: COMPANY.phone,
                contactType: 'customer support',
                email: COMPANY.email
              }],
              sameAs: []
            })
          }}
        />
      </body>
    </html>
  );
}
