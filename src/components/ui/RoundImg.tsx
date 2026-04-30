import Image, { StaticImageData } from 'next/image';
import styles from './RoundImg.module.scss';

export interface Testimonio {
  id: string;
  image: StaticImageData;
  title: string;
  role: string;
  description: string;
  date: string;
}

interface RoundImgProps {
  testimonio: Testimonio;
}

export default function RoundImg({ testimonio }: RoundImgProps) {
  const { image, title, role, description } = testimonio;

  return (
    <div className={styles.testimonio}>
      <div className={styles.grid}>
        <div className={styles.imgCol}>
          <div className={styles.avatarRow}>
            <span className={styles.arrow}>&#8249;</span>
            <Image
              src={image}
              alt={title}
              width={180}
              height={180}
              className={styles.avatar}
            />
            <span className={styles.arrow}>&#8250;</span>
          </div>
        </div>
        <div className={styles.txtCol}>
          <h3 className="font30 weight800 padding5">{title}</h3>
          <h5 className="font20 weight800 margin0">{role}</h5>
          <p>
            <span className={styles.quote}>&ldquo;</span>
            {description}
            <span className={styles.quote}>&rdquo;</span>
          </p>
        </div>
      </div>
    </div>
  );
}
