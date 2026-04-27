'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import LogoImg from '@/assets/navbar/logo.svg';
import LogoMobile from '@/assets/navbar/logo-mobile.svg';
import MobileMenuIcon from '@/assets/navbar/mobile-menu.svg';
import CloseIcon from '@/assets/navbar/mobile-close.svg';
import styles from './Navbar.module.scss';

const NAV_LINKS = [
  { href: '#portfolio', label: 'SERVICIOS' },
  { href: '#about',     label: 'QUIENES SOMOS' },
  { href: '#blog',      label: 'EXPERIENCIAS' },
  { href: '#contact',   label: 'CONTACTO' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Desktop / main navbar */}
      <nav className={`${styles.navbar} ${!isScrolled ? styles.extraLarge : ''}`}>
        <div className="wrapper flex-s-between">
          <a href="#hero" aria-label="Ir al inicio">
            <Image src={LogoImg} alt="Las Paces logo" width={200} height={50} className={styles.logoDesktop} />
            <Image src={LogoMobile} alt="Las Paces logo" width={50} height={50} className={styles.logoMobile} />
          </a>

          {/* Hamburger — visible only on mobile */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <Image src={MobileMenuIcon} alt="" width={30} height={30} aria-hidden="true" />
          </button>

          {/* Desktop links */}
          <ul className={`${styles.desktopMenu} flex-s-between`}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.mobileNavbar} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <button className={styles.closeBtn} onClick={closeMobile} aria-label="Cerrar menú">
          <Image src={CloseIcon} alt="" width={30} height={30} aria-hidden="true" />
        </button>
        <div className={`${styles.mobileLogo} flex-center`}>
          <a href="#hero" onClick={closeMobile}>
            <Image src={LogoMobile} alt="Las Paces logo" height={50} />
          </a>
        </div>
        <nav className={styles.mobileMenu}>
          <ul>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} className="flex-center">
                <a href={href} onClick={closeMobile}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className={styles.backdrop}
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </>
  );
}
