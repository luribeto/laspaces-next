import styles from './Title.module.scss';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className={styles.titleRow}>
      <div className={styles.bigTitle}>
        <h2 className="weight800 font60 padding40">{title}</h2>
      </div>
    </div>
  );
}
