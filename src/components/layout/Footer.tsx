import Image from 'next/image';
import Logo from '@/assets/footer/logo-footer.svg';
import Arrow from '@/assets/footer/arrow.svg';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.grid}>
          <div className={styles.logoCol}>
            <div className={styles.footerBoxLp}>
              <Image src={Logo} alt="Las Paces logo" width={120} height={60} />
              <div>
                <p>© 2022 - Las Paces, Derechos Reservados</p>
                <p style={{ lineHeight: '1.3rem' }}>
                  © 2022 - Algunas fotografías de esta página están asociadas y se usan con
                  autorización del Proyecto -Diciendo-Nos, Modelo de intervención restaurativa para
                  la atención a víctimas- del Programa JAVA de USAID México coordinado por la
                  Organización de la Sociedad Civil Sentit Nobis.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.btnCol}>
            <a href="#hero" className={styles.backToTop} aria-label="Volver al inicio">
              <p>INICIO</p>
              <Image src={Arrow} alt="" width={24} height={24} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
