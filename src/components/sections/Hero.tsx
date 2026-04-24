import Button from '@/components/ui/Button';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero} id="hero" style={{ backgroundImage: 'url(/images/back-hero.png)' }}>
      <div className={styles.opacity}>
        <div className={`wrapper ${styles.inner}`}>
          <div className={styles.grid}>
            <div className={styles.infoCol}>
              <div className={styles.heroInfo}>
                <h1 className="weight800 font40 colorBlue">
                  Somos Especialistas en Justicia Restaurativa
                </h1>
                <p className="font20" style={{ textAlign: 'justify' }}>
                  Somos una organización dedicada a dar asesoría a entidades estatales y no
                  estatales y a personas que trabajan o están involucradas con temas de justicia
                  restaurativa y reparación integral a víctimas. Realizamos procesos de consultoría,
                  asesoría, fortalecimiento y formación en herramientas psicosociales para la
                  restauración y reparación integral a víctimas, el cuidado emocional de quienes
                  trabajan con graves violaciones a los derechos humanos, también desarrollamos
                  procesos de mediación y preparación para el reconocimiento.
                </p>
                <Button label="ENVÍANOS UN MENSAJE" target="contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
