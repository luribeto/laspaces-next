import Image, { StaticImageData } from 'next/image';
import styles from './TeamBox.module.scss';

interface TeamBoxProps {
  avatar: StaticImageData;
  name: string;
  title1: string;
  title2: string;
}

export default function TeamBox({ avatar, name, title1, title2 }: TeamBoxProps) {
  return (
    <div className={styles.teamBox}>
      <Image src={avatar} alt={`Foto de ${name}`} fill style={{ objectFit: 'cover' }} />
      <div className={styles.info}>
        <p className="font15 weight800">{name}</p>
        <p className="font13 weight500">{title1}</p>
        <p className="font13 weight500" style={{ lineHeight: '1.3rem' }}>{title2}</p>
      </div>
    </div>
  );
}
