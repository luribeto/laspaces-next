import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/lib/services';
import styles from './page.module.scss';

// ── Importar imágenes de detalle ─────────────────────────────
import InDano        from '@/assets/portfolio/in-dano.png';
import InProtocolos  from '@/assets/portfolio/in-protocolos.png';
import InEstrategias from '@/assets/portfolio/in-estrategias.png';
import InMediacion   from '@/assets/portfolio/in-mediacion.png';
import InFormacion   from '@/assets/portfolio/in-formacion.png';
import InAsesorias   from '@/assets/portfolio/in-asesorias-new.png';
import { StaticImageData } from 'next/image';

const PREVIEW_IMGS: Record<string, StaticImageData> = {
  '1': InDano,
  '2': InProtocolos,
  '3': InEstrategias,
  '4': InMediacion,
  '5': InFormacion,
  '6': InAsesorias,
};

// ── Genera las 6 rutas estáticas en build time ───────────────
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// ── Meta tags por servicio ───────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: {
      canonical: `https://laspaces.co/servicios/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'article',
      locale: 'es_CO',
      url: `https://laspaces.co/servicios/${service.slug}`,
      images: [
        {
          url: service.backImg,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

// ── Página ───────────────────────────────────────────────────
export default async function ServicioPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // JSON-LD Service schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'Organization',
      name: 'Las Paces',
      url: 'https://laspaces.co',
    },
    areaServed: 'CO',
    serviceType: 'Consultoría en Justicia Restaurativa',
    url: `https://laspaces.co/servicios/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.page}>
        {/* Hero del servicio */}
        <div
          className={styles.hero}
          style={{ backgroundImage: `url(${service.backImg})` }}
        >
          <div className={styles.heroOverlay}>
            <div className="wrapper">
              <h1 className={`weight800 colorBlue ${styles.heroTitle}`}>
                {service.title}
              </h1>
              <p className={styles.heroTag}>
                {service.tag} años de experiencia
              </p>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="wrapper">
          <div className={styles.content}>
            <div className={styles.imgCol}>
              <Image
                src={PREVIEW_IMGS[service.id]}
                alt={service.title}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
              />
            </div>
            <div className={styles.textCol}>
              <p className="font20">{service.text1}</p>
              {service.text2 && (
                <>
                  <br />
                  <p className="font20">{service.text2}</p>
                </>
              )}
              {service.text3 && (
                <>
                  <br />
                  <p className="font20">{service.text3}</p>
                </>
              )}
            </div>
          </div>

          {/* Navegación */}
          <div className={styles.bottomNav}>
            <Link href="/#portfolio" className={styles.backLink}>
              ← Volver a todos los servicios
            </Link>
            <Link href="/#contact" className={styles.contactLink}>
              Contáctanos →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
