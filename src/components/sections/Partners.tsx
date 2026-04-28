'use client';

import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Eje01 from '@/assets/partners/eje-1.svg';
import Eje03 from '@/assets/partners/eje-3.svg';
import Eje04 from '@/assets/partners/eje-4.svg';
import Eje05 from '@/assets/partners/eje-5.svg';
import Eje06 from '@/assets/partners/eje-6.svg';
import Eje07 from '@/assets/partners/eje-7.svg';
import styles from './Partners.module.scss';

const PARTNERS: { id: string; img: StaticImageData; alt: string }[] = [
  { id: '1', img: Eje01, alt: 'Partner 1' },
  { id: '3', img: Eje03, alt: 'Partner 3' },
  { id: '4', img: Eje04, alt: 'Partner 4' },
  { id: '5', img: Eje05, alt: 'Partner 5' },
  { id: '6', img: Eje06, alt: 'Partner 6' },
  { id: '7', img: Eje07, alt: 'Partner 7' },
];

export default function Partners() {
  return (
    <div id="partners" className={styles.partners}>
      <div className="wrapper">
        <Swiper
          grabCursor
          loop
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            320:  { slidesPerView: 2, spaceBetween: 10 },
            640:  { slidesPerView: 3, spaceBetween: 20 },
            768:  { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
            1200: { slidesPerView: 6, spaceBetween: 40 },
          }}
        >
          {PARTNERS.map(({ id, img, alt }) => (
            <SwiperSlide key={id}>
              <a href="#portfolio" className={styles.partnerBox}>
                <Image src={img} alt={alt} height={110} style={{ width: 'auto', height: '110px' }} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
