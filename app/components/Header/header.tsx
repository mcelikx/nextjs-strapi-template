import Image from "next/image";
import Link from "next/link";
import classes from "./header.module.css";
type Props = {
  items?: any[];
};
const defaultItems = [
  {
    name: "Anasayfa",
    href: "/",
  },
  {
    name: "Faaliyetler",
    href: "/faaliyetler",
  },
  {
    name: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    name: "İletişim",
    href: "/iletisim",
  },
];

const Header = ({ items }: Props) => {
  const menuItems = items || defaultItems;

  return (
    <header id="header">
      <nav id="navbar" className={classes.navbar}>
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
          <div className="relative z-20 flex  justify-between md:px-0 ">
            <a href="/" aria-label="logo" className={classes.logo}>
              <Image
                alt=""
                src="/logo.svg"
                width={200}
                height={200}
                className="w-full"
              />
            </a>

            <button
              aria-label="menü"
              id="hamburger"
              className={classes.hamburger}
            >
              <div
                aria-hidden="true"
                className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
              ></div>
              <div
                aria-hidden="true"
                className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
              ></div>
            </button>
          </div>
          {/* <div
              id="layer"
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"
            ></div>
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0 dark:lg:bg-transparent"
            >
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 text-sm md:text-base font-medium tracking-wide lg:flex lg:space-y-0">
                  <li>
                    <a
                      href="gelen-oneri-personel"
                      className="block transition hover:text-primary dark:hover:text-primaryLight md:px-4"
                    >
                      <span>Önerilerim</span>
                    </a>
                  </li>
                  <li v-html="getMenu1()"></li>
                  <li v-html="getMenu2()"></li>
                  <li v-html="getMenu3()"></li>
                  <li v-html="getMenu4()"></li>
                </ul>
              </div>

              <div className="mt-12 -ml-1 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
                <figcaption className="flex items-center justify-center space-x-4 text-left">
                  <div v-html="getPhoto()"></div>
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
                </figcaption>
              </div>
              <button
                aria-label="switch theme"
                className="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            </div>
            <div className="fixed top-6 right-14 z-20 sm:right-24 lg:hidden">
              <button
                aria-label="switche theme"
                className="switcher group relative flex h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="transistion relative m-auto hidden h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="transistion relative m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              </button>
            </div> */}
        </div>
      </nav>
    </header>
    // <header className={classes.root}>
    //   <div className={classes.logo}>
    //     <Image alt="" src="/logo.svg" width={200} height={200} />
    //   </div>
    //   <div className={classes.menu}>
    //     {menuItems.map((item, index) => (
    //       <Link key={index} href={item.href}>
    //         {item.name}
    //       </Link>
    //     ))}
    //   </div>
    // </header>
  );
};

export default Header;
