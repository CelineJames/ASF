import { useState } from "react";
import styles from "./Navbar.module.css";

const MenuIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const BellIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} container`}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <img src="/asf-logo.svg" alt="asf Logo" className={styles.logoImg} />
        </a>

        {/* Desktop right side */}
        <div className={styles.right}>
          <nav className={styles.iconGroup}>
            <a href="#search" className={styles.iconBtn} aria-label="Search">
              {/* <SearchIcon /> */}
              Join Community
            </a>
            <a
              href="#notifications"
              className={styles.iconBtn}
              aria-label="Notifications"
            >
              {/* <BellIcon /> */}
              Resources
            </a>
            <a href="#account" className={styles.iconBtn} aria-label="Account">
              {/* <UserIcon /> */}
              Submit Document
            </a>
          </nav>
          <a href="#join" className={styles.ctaBtn}>
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav className={styles.mobileNav}>
          <a href="#why" onClick={() => setMenuOpen(false)}>
            Why Us
          </a>
          <a href="#join" onClick={() => setMenuOpen(false)}>
            Community
          </a>
          <a href="#download" onClick={() => setMenuOpen(false)}>
            Resources
          </a>
          <a href="#review" onClick={() => setMenuOpen(false)}>
            Submit
          </a>
        </nav>
        <div className={styles.mobileIcons}>
          <button className={styles.iconBtn} aria-label="Search">
            <SearchIcon />
          </button>
          <button className={styles.iconBtn} aria-label="Notifications">
            <BellIcon />
          </button>
          <button className={styles.iconBtn} aria-label="Account">
            <UserIcon />
          </button>
        </div>
        <a
          href="#join"
          className={styles.ctaBtn}
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
