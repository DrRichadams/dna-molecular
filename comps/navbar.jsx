"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.brand}>
          <div className={styles.logoBox}>
            <Image
              src="/images/molecular.png"
              alt="DNA Molecular Diagnostics logo"
              width={42}
              height={42}
              priority
            />
          </div>

          <div className={styles.brandText}>
            <span>DNA Molecular</span>
            <small>Diagnostics</small>
          </div>
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li key={link.label} style={{ "--delay": `${index * 0.08}s` }}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href="#contact" className={styles.secondaryLink}>
            Call Us
          </Link>

          <Link href="#booking" className={styles.ctaBtn}>
            Book Test
          </Link>
        </div>

        <button
          className={styles.menuBtn}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="#booking"
          className={styles.mobileCta}
          onClick={() => setOpen(false)}
        >
          Book Test
        </Link>
      </div>
    </header>
  );
}
