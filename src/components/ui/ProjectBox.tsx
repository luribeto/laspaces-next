import styles from './ProjectBox.module.scss';

interface ProjectBoxProps {
  id: string;
  title: string;
  tag: string;
  backImg: string; // public path e.g. "/images/back-dano-old.png"
  show?: string;
  onClick?: () => void;
}

export default function ProjectBox({ title, tag, backImg, show = 'block', onClick }: ProjectBoxProps) {
  return (
    <div
      className={styles.portfolioBox}
      style={{ display: show, backgroundImage: `url(${backImg})` }}
      onClick={onClick}
    >
      <div className={`${styles.hoverInfo} flex-center`}>
        <div className="text-center">
          <p className="font30 weight800">{title}</p>
          <p className="weight500" style={{ fontSize: '2.5rem' }}>
            Exp. <b>{tag}</b> años
          </p>
        </div>
      </div>
    </div>
  );
}
