import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.scss';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://laspaces.co'),
  title: {
    default: 'Las Paces — Especialistas en Justicia Restaurativa',
    template: '%s | Las Paces',
  },
  description:
    'Las Paces es una organización colombiana especializada en Justicia Restaurativa, atención psicosocial, mediación entre víctimas y responsables, y formación para operadores de justicia.',
  keywords: [
    'justicia restaurativa',
    'atención psicosocial',
    'mediación víctimas',
    'derechos humanos Colombia',
    'daños psicosociales',
    'formación operadores judiciales',
    'Las Paces',
  ],
  authors: [{ name: 'Las Paces' }],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://laspaces.co',
    siteName: 'Las Paces',
    title: 'Las Paces — Especialistas en Justicia Restaurativa',
    description:
      'Organización colombiana especializada en Justicia Restaurativa, atención psicosocial y mediación. Más de 17 años de experiencia.',
    images: [
      {
        url: '/images/back-hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Las Paces — Especialistas en Justicia Restaurativa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Paces — Especialistas en Justicia Restaurativa',
    description:
      'Organización colombiana especializada en Justicia Restaurativa, atención psicosocial y mediación.',
    images: ['/images/back-hero.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'oXy8qlTCALx11fvgC0t6kEHAPM7ycTojLUwB4e02AFY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        {/* Material Symbols for blog drag icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
      </head>
      <body>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  );
}
