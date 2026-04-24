'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Title from '@/components/ui/Title';
import RoundImg, { Testimonio } from '@/components/ui/RoundImg';

import Testimonio01 from '@/assets/blog/testimonio-1.jpeg';
import Testimonio02 from '@/assets/blog/testimonio-2.png';
import Testimonio03 from '@/assets/blog/testimonio-3.png';
import Testimonio04 from '@/assets/blog/testimonio-4.png';
import Testimonio05 from '@/assets/blog/testimonio-5.png';
import Testimonio06 from '@/assets/blog/testimonio-6.png';
import Testimonio07 from '@/assets/blog/testimonio-7.png';

import styles from './Blog.module.scss';

const TESTIMONIOS: Testimonio[] = [
  {
    id: '1',
    image: Testimonio01,
    title: 'Carolina Jiménez Sandoval',
    role: 'Presidenta de la Oficina en Washington para Asuntos Latinoamericanos - WOLA',
    description:
      'En contextos de violencia sistemática, de guerra o de trabajo en el marco de gobiernos autoritarios el tejido social, incluido el de la sociedad civil, se resquebraja. Por ello, un grupo de organizaciones trabajamos con Lina Rondon/Las Paces en un esfuerzo por reunirnos y repensar nuestro trabajo. Desde el inicio, Lina/Las Paces usaron metodologías de trabajo que permitieron situarnos, comprender la situación y posteriormente tramitar tensiones y dificultades para movernos hacia un necesitado reencuentro. Su experticia y cuidadoso trabajo en mediación contribuyó a un proceso de fortalecimiento colectivo muy necesario.',
    date: '21 April 2020',
  },
  {
    id: '2',
    image: Testimonio07,
    title: 'Graciela Frias Ojinaga',
    role: 'Directora Sentit Nobis - México',
    description:
      'Desde Sentit Nobis estamos profundamente agradecidas con Lina Rondón/Las paces por su valiosa colaboración en el desarrollo del Proyecto DICIENDO NOS, Programa de Implementación de Procesos Restaurativos para la Atención a Víctimas. Compromiso, interés genuino, reflexividad, ampliación de mirada, creatividad y aprendizaje significativo logrado en las instituciones contraparte del Programa JAVA de USAID México, en los estados de Sonora, San Luis Potosí, Coahuila e Hidalgo en México; su aportación y acompañamiento han sido fundamentales para los logros obtenidos… gracias de corazón.',
    date: '27 April 2020',
  },
  {
    id: '3',
    image: Testimonio03,
    title: 'Oscar Parra Vera',
    role: 'Magistrado Sala de Reconocimiento - Jurisdicción Especial para la Paz',
    description:
      'Los diálogos que he tenido con Lina Rondón en los últimos años han sido fundamentales para pensar en diversos desafíos metodológicos y sustantivos sobre la determinación de los daños individuales, familiares, colectivos en el marco de los macrocasos, así como los pasos adecuados para pensar las audiencias de observaciones frente a las versiones y cómo organizar la participación de las representaciones de víctimas en las observaciones y en particular, cómo pensarnos esa terceridad de la magistratura frente a las víctimas y frente a los comparecientes pero para construir escenarios de diálogo en torno al reconocimiento.',
    date: '27 April 2020',
  },
  {
    id: '4',
    image: Testimonio04,
    title: 'Olga Lucía Gomez',
    role: 'Gerente Criterios de Ruta',
    description:
      'He conocido el trabajo de Lina Rondón por mas de 20 años y he tenido la fortuna de trabajar con ella en distintos escenarios de cooperación internacional, organizaciones no gubernamentales y entidades del Estado, principalmente en lo relacionado con la elaboración de protocolos de atención a víctimas y poblaciones vulnerables. Sin duda su experiencia actual le ha dado elementos muy valiosos para desarrollar muy bien las líneas de trabajo de su portafolio con Las Paces.',
    date: '03 May 2020',
  },
  {
    id: '5',
    image: Testimonio05,
    title: 'Paula Gaviria Betancur',
    role: 'Directora Fundación COMPAZ',
    description:
      'El acompañamiento psicosocial a víctimas y sobrevivientes del conflicto es fundamental, sin ello, muchos de los otros esfuerzos que se realizan por parte del Estado colombiano y de las organizaciones de la sociedad civil, resultan insuficientes. La estrategia de recuperación emocional a nivel grupal y Entrelazando fueron esfuerzos desde la Unidad para las Víctimas que fueron coordinados por Lina quien con el equipo psicosocial lograron impactar positivamente la vida de muchas víctimas, sobrevivientes y comunidades.',
    date: '15 May 2020',
  },
  {
    id: '6',
    image: Testimonio06,
    title: 'Marcos Morales',
    role: 'Director FORENPSIC',
    description:
      'He tenido el gusto y el honor de formarme con Lina Rondón y puedo decir que es extraordinaria la manera en que transmite conocimientos y experiencias; fomenta la reflexión en torno a la práctica forense con víctimas y apela siempre por una visión empática y sensible pero rigurosa frente al trabajo con víctimas de graves violaciones de derechos humanos. Para mí, una de las principales referentes contemporáneas del enfoque psicosocial en Latinoamérica.',
    date: '20 May 2020',
  },
];

export default function Blog() {
  return (
    <div className={styles.blog} id="blog">
      <div className="wrapper">
        <Title title="EXPERIENCIAS" />
        <p className="font20">
          Algunas de las palabras y reconocimientos que algunos de nuestros clientes han tenido con
          nosotros.
          <br />
          A todos ellos, gracias por estas palabras de reconocimiento sobre nuestro trabajo.
        </p>

        <div className={styles.swiperWrapper}>
          <div className={`${styles.testimonioHover} flex-center`}>
            <span className="material-symbols-outlined">drag_indicator</span>
            <span className="material-symbols-outlined">drag_indicator</span>
          </div>

          <Swiper
            grabCursor
            loop
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              320:  { slidesPerView: 1, spaceBetween: 10 },
              640:  { slidesPerView: 1, spaceBetween: 20 },
              768:  { slidesPerView: 1, spaceBetween: 30 },
              1024: { slidesPerView: 1, spaceBetween: 40 },
              1200: { slidesPerView: 1, spaceBetween: 40 },
            }}
          >
            {TESTIMONIOS.map((testimonio) => (
              <SwiperSlide key={testimonio.id}>
                <RoundImg testimonio={testimonio} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
