import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Portfolio from '@/components/sections/Portfolio';
import Partners from '@/components/sections/Partners';
import About from '@/components/sections/About';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://laspaces.co',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Las Paces',
  url: 'https://laspaces.co',
  description:
    'Organización colombiana especializada en Justicia Restaurativa, atención psicosocial, mediación entre víctimas y responsables, y formación para operadores de justicia.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+57-320-3433353',
    email: 'laspaces.sas@gmail.com',
    contactType: 'customer support',
    areaServed: 'CO',
    availableLanguage: 'Spanish',
  },
  sameAs: [
    'https://www.facebook.com/profile.php?id=100069085670675',
    'https://twitter.com/Las_Paces',
    'https://www.youtube.com/channel/UCGFt4-hlrrLIu3Ptjd4JfVQ',
  ],
  founder: {
    '@type': 'Person',
    name: 'Lina Rondón Daza',
    jobTitle: 'Psicóloga especialista en Justicia Restaurativa',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <main>
        <Hero />
        <Portfolio />
        <Partners />
        <About />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
