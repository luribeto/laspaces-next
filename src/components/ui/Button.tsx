import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  target: string; // section id, e.g. "contact"
}

export default function Button({ label, target }: ButtonProps) {
  return (
    <div className={styles.button}>
      <a href={`#${target}`} className={styles.buttonLink}>
        {label}
      </a>
    </div>
  );
}
