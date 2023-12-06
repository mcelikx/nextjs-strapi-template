"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./header.module.css";
import Logo from "app/assets/logo";
import ThemeButton from "./themeButton";
type Props = {
  items?: any[];
};
const defaultItems = [
  {
    title: "Anasayfa",
    url: "/",
  },
  {
    title: "Faaliyetler",
    url: "/faaliyetler",
  },
  {
    title: "Duyurular",
    url: "/duyurular",
  },
  {
    title: "Hakkımızda",
    url: "/hakkimizda",
  },
  {
    title: "İletişim",
    url: "/iletisim",
  },
];

const handleThemeChange = () => {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  }
};

const Header = ({ items }: Props) => {
  const menuItems = items || defaultItems;

  const [hamburgerActive, setHamburgerActive] = useState(false);

  useEffect(() => {
    // control theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });



  return (
    <header id="header" className={classes.header}>
      <Link href="/" aria-label="logo" className={classes.logo}>
        <Logo />
      </Link>
      <nav
        className={
          hamburgerActive
            ? classes.hamburgerActiveNavigation
            : classes.navigation
        }
      >
        <div className="relative z-20 flex  justify-between md:px-0 ">
          <button
            onClick={() => setHamburgerActive(!hamburgerActive)}
            className={classes.hamburger}
          >
            <div aria-hidden="true" className={classes.hamburgerLine}></div>
            <div aria-hidden="true" className={classes.hamburgerLine2}></div>
          </button>
        </div>

        <div className={classes.navlinks}>
          <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
            <ul className="space-y-6 text-sm md:text-base font-medium tracking-wide lg:flex lg:space-y-0">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4"
                  >
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
            <div>
              <div className="text-slate-900 font-semibold dark:text-white">
                Muhammed Çelik
              </div>
              <a
                href="index"
                className=" text-sm tracking-wide block transition hover:text-primary dark:hover:text-primaryLight dark:text-white"
              >
                <span>Çıkış</span>
              </a>
            </div>
          </div>
        </div>
        <ThemeButton />
      </nav>
    </header>
  );
};

export default Header;
