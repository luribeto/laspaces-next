'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import Title from '@/components/ui/Title';
import Modal from '@/components/ui/Modal';
import ContactBackground from '@/assets/contact/bg-2.png';
import ContactInfoIcon2 from '@/assets/contact/contact-info-icon2.svg';
import ContactInfoIcon3 from '@/assets/contact/contact-info-icon3.svg';
import FacebookIcon from '@/assets/contact/facebook.svg';
import TwitterIcon from '@/assets/contact/twitter.svg';
import YoutubeIcon from '@/assets/contact/youtube.svg';
import styles from './Contact.module.scss';

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? 'default_service';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'las_paces_web';
const API_KEY     = process.env.NEXT_PUBLIC_EMAILJS_KEY          ?? 'v0K0MIk0LI2NKtQKk';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const EMPTY_FORM: FormState = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm]           = useState<FormState>(EMPTY_FORM);
  const [sending, setSending]     = useState(false);
  const [modal, setModal]         = useState<'success' | 'error' | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    const params = {
      name:    form.name,
      email:   form.email,
      phone:   form.phone || 'n/a',
      message: form.message,
    };

    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, API_KEY);
      if (response.status === 200) {
        setModal('success');
      } else {
        setModal('error');
      }
    } catch {
      setModal('error');
    } finally {
      setSending(false);
      setForm(EMPTY_FORM);
    }
  };

  return (
    <div id="contact" className={styles.contact}>
      {modal && <Modal status={modal} onClose={() => setModal(null)} />}

      <div className="wrapper">
        <Title title="CONTACTO" />
        <p className="font20">
          Si quieres conocer más de nuestro trabajo o consideras que nuestra experiencia te puede
          servir para lograr o fortalecer tu objetivo, no dudes en enviarnos un mensaje y pronto te
          contestaremos todas tus inquietudes.
        </p>

        <div className={`${styles.grid} padding40`}>
          {/* Form */}
          <div className={styles.formCol}>
            <form id="contact-form" onSubmit={handleSubmit}>
              <h4 className="font30 weight800 padding30">Envíanos un mensaje:</h4>
              <input
                type="text" name="name" placeholder="Nombre" required
                value={form.name} onChange={handleChange}
              />
              <input
                type="email" name="email" placeholder="Email" required
                value={form.email} onChange={handleChange}
              />
              <input
                type="tel" name="phone" placeholder="Teléfono (opcional)"
                value={form.phone} onChange={handleChange}
              />
              <textarea
                rows={6} name="message" placeholder="Mensaje..." required
                value={form.message} onChange={handleChange}
              />

              <div className={styles.smallButton}>
                {sending ? (
                  <div className={styles.sendingBtn}>
                    <div className="flex-center">
                      <div className={styles.spinner} />
                    </div>
                  </div>
                ) : (
                  <button type="submit" aria-label="Enviar mensaje">
                    ENVIAR MENSAJE
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Background image */}
          <div className={`${styles.imgCol} flex-center`}>
            <Image src={ContactBackground} alt="Las Paces — contacto" />
          </div>
        </div>

        {/* Contact info */}
        <div className={styles.infoRow}>
          <a href="callto:+573203433353" target="_blank" rel="noopener noreferrer" className={styles.infoBox}>
            <Image src={ContactInfoIcon2} alt="" width={40} height={40} aria-hidden="true" />
            <p>+57 320-3433353</p>
          </a>
          <a href="mailto:laspaces.sas@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.infoBox}>
            <Image src={ContactInfoIcon3} alt="" width={40} height={40} aria-hidden="true" />
            <p>laspaces.sas@gmail.com</p>
          </a>
        </div>

        {/* Social links */}
        <div className={styles.socialRow}>
          <a href="https://www.facebook.com/profile.php?id=100069085670675" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Las Paces">
            <Image src={FacebookIcon} alt="Facebook" width={32} height={32} style={{ paddingTop: '5px' }} />
          </a>
          <a href="https://twitter.com/Las_Paces" target="_blank" rel="noopener noreferrer" aria-label="Twitter de Las Paces">
            <Image src={TwitterIcon} alt="Twitter" width={32} height={32} style={{ paddingTop: '10px' }} />
          </a>
          <a href="https://www.youtube.com/channel/UCGFt4-hlrrLIu3Ptjd4JfVQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube de Las Paces">
            <Image src={YoutubeIcon} alt="YouTube" width={32} height={32} />
          </a>
        </div>
      </div>
    </div>
  );
}
