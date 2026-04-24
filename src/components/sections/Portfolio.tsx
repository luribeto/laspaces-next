'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { services, Service } from '@/lib/services';
import Title from '@/components/ui/Title';
import ProjectBox from '@/components/ui/ProjectBox';
import Button from '@/components/ui/Button';
import styles from './Portfolio.module.scss';

// Masonry accesses the DOM — load only on client
const Masonry = dynamic(() => import('react-masonry-css'), { ssr: false });

import InDano       from '@/assets/portfolio/in-dano.png';
import InProtocolos from '@/assets/portfolio/in-protocolos.png';
import InEstrategias from '@/assets/portfolio/in-estrategias.png';
import InMediacion  from '@/assets/portfolio/in-mediacion.png';
import InFormacion  from '@/assets/portfolio/in-formacion.png';
import InAsesorias  from '@/assets/portfolio/in-asesorias-new.png';

// Map service id → preview image (imported as StaticImageData)
const PREVIEW_IMGS: Record<string, typeof InDano> = {
  '1': InDano,
  '2': InProtocolos,
  '3': InEstrategias,
  '4': InMediacion,
  '5': InFormacion,
  '6': InAsesorias,
};

const BREAKPOINTS = { default: 3, 1100: 3, 700: 2, 500: 1 };

export default function Portfolio() {
  const [selected, setSelected] = useState<Service | null>(null);

  const disablePrev = selected?.id === '1';
  const disableNext = selected?.id === '6';

  const goPrev = () => {
    if (!selected) return;
    const idx = services.findIndex((s) => s.id === selected.id);
    if (idx > 0) setSelected(services[idx - 1]);
  };

  const goNext = () => {
    if (!selected) return;
    const idx = services.findIndex((s) => s.id === selected.id);
    if (idx < services.length - 1) setSelected(services[idx + 1]);
  };

  return (
    <div id="portfolio" className={styles.portfolio}>
      <div className="wrapper">
        <Title title="SERVICIOS" />

        {/* Nav controls when a service is selected */}
        <div className={styles.nav}>
          {selected && (
            <div>
              <button className="all-button" onClick={() => setSelected(null)}>
                ❖ TODOS LOS SERVICIOS
              </button>
              <button className="back-btn" disabled={disablePrev} onClick={goPrev}>
                ← ANTERIOR
              </button>
              <button className="back-btn" disabled={disableNext} onClick={goNext}>
                SIGUIENTE →
              </button>
            </div>
          )}
        </div>

        {/* Detail view */}
        {selected ? (
          <div className={styles.servicioMain}>
            <div className={styles.servicioGrid}>
              <div className={styles.serviceImg}>
                <Image
                  src={PREVIEW_IMGS[selected.id]}
                  alt={selected.title}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className={styles.servicioText}>
                <h2 className="font30 weight800 padding30 colorBlue" style={{ paddingTop: 0 }}>
                  {selected.title}
                </h2>
                <p className="font20">{selected.text1}</p>
                <br />
                <p className="font20">{selected.text2}</p>
                {selected.text3 && (
                  <>
                    <br />
                    <p className="font20">{selected.text3}</p>
                  </>
                )}
                <div className={styles.serviceLink}>
                  <Link href={`/servicios/${selected.slug}`} className={styles.verMas}>
                    Ver página completa →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Masonry grid */
          <Masonry
            breakpointCols={BREAKPOINTS}
            className="my-masonry-grid"
            columnClassName="mint__gallery"
          >
            {services.map((service) => (
              <ProjectBox
                key={service.id}
                id={service.id}
                title={service.title}
                tag={service.tag}
                backImg={service.backImg}
                onClick={() => setSelected(service)}
              />
            ))}
          </Masonry>
        )}

        <div className="flex-center padding40">
          <Button label="¿NECESITAS NUESTROS SERVICIOS?" target="contact" />
        </div>
      </div>
    </div>
  );
}
