'use client';

import styles from './Modal.module.scss';

interface ModalProps {
  status: 'success' | 'error';
  onClose: () => void;
}

export default function Modal({ status, onClose }: ModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />

      {status === 'success' ? (
        <div className={`${styles.modalBox} ${styles.success} fadeInUp`}>
          <p className={styles.title}>¡Mensaje enviado!</p>
          <p>Gracias por escribirnos. Te responderemos lo antes posible.</p>
          <button className={styles.modalBtn} onClick={onClose}>Ok</button>
        </div>
      ) : (
        <div className={`${styles.modalBox} ${styles.error} fadeInUp`}>
          <p className={styles.title}>¡Oops!</p>
          <p>Algo salió mal. Por favor intenta de nuevo.</p>
          <button className={styles.modalBtn} onClick={onClose}>Ok</button>
        </div>
      )}
    </div>
  );
}
