import Image from 'next/image';
import Title from '@/components/ui/Title';
import TeamBox from '@/components/ui/TeamBox';
import Person01 from '@/assets/about/linix-quienes-somos.png';
import styles from './About.module.scss';

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <div className="wrapper">
        <Title title="QUIÉNES SOMOS" />
        <div className={styles.grid}>
          <div className={styles.bioCol}>
            <p className="font20" style={{ textAlign: 'justify' }}>
              Psicóloga, con especialización en psicología jurídica de la Universidad Católica de
              Colombia, Maestría en defensa de los DDHH de la Universidad Santo Tomás y formación
              en el modelo de Mediación Humanista de la Universidad de Milano-Italia.
            </p>
            <p className="font20" style={{ paddingTop: '20px', textAlign: 'justify' }}>
              Con 19 años de experiencia en atención a víctimas de grupos organizados al margen de
              la ley, se ha desempeñado en el diseño de programas de reconstrucción del tejido
              social de escala nacional, atención terapéutica a víctimas del conflicto armado,
              atención psicojurídica, investigación, evaluación forense del daño con víctimas
              individuales y colectivas de violaciones a los derechos humanos y diseño de política
              pública en Reparaciones y Justicia Restaurativa.
            </p>
            <p className="font20" style={{ paddingTop: '20px', textAlign: 'justify' }}>
              Ha trabajado en la realización de protocolos de atención psicosocial y psicojurídica,
              reconstrucción del tejido social, mediación, pedagogía emocional y transformación
              cultural en derechos humanos.
            </p>
          </div>
          <div className={styles.teamCol}>
            <TeamBox
              avatar={Person01}
              name="Lina Rondón Daza"
              title1="Psicóloga. Especialista en psicología jurídica"
              title2="Maestría en defensa de los derechos humanos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
