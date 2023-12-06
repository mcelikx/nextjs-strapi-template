"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import styles from "./styles.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = window.innerWidth < 1024;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={styles.root}>
        <header className={styles.header}>
          {isMobile ? (
            <div
              className={`${styles.menuToggle} ${isOpen ? styles.open : ""}`}
              onClick={toggleMenu}
            >
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
          ) : (
            <div></div>
          )}
          <div>BTK</div>
          <div>Profile</div>
        </header>
        <div className={styles.content}>
          <nav
            className={`${styles.nav} ${
              isOpen ? styles.show : styles.hiddenNav
            }`}
          >
            <Link
              onClick={() => {
                if (isMobile) {
                  setIsOpen(false);
                }
              }}
              className={styles.link}
              href="/dashboard/faaliyetler"
            >
              Faaliyetler
            </Link>
            <Link
              onClick={() => {
                if (isMobile) {
                  setIsOpen(false);
                }
              }}
              className={styles.link}
              href="/dashboard/duyurular"
            >
              Duyurular
            </Link>
            <Link
              onClick={() => {
                if (isMobile) {
                  setIsOpen(false);
                }
              }}
              className={styles.link}
              href="/dashboard/hakkimizda"
            >
              Hakkımızda
            </Link>
          </nav>
          <div className={styles.page}>{children}</div>
        </div>
      </body>
    </html>
  );
}
