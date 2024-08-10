import React from "react";
import "@deps/styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons/faPaw";
import { DEFAULT_PAGE_TITLE } from "@deps/constants/page-title";
import Link from "next/link";

const AppHead = () => (
  <Head>
    <title>{DEFAULT_PAGE_TITLE}</title>
    <meta name="description" content="Next.js App" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </Head>
);

const AppBody = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between px-6 py-4">
          <Link href="/">
            <FontAwesomeIcon
              icon={faPaw}
              height={35}
              width={35}
              className="color-[#121212]"
            />
          </Link>
          <ul className="flex gap-4 font-semibold">
            <li>
              <Link href="/about" className="group transition duration-300">
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600"></span>
              </Link>
            </li>
            <li>
              <Link href="/pets" className="group transition duration-300">
                Available Pets
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600"></span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="group transition duration-300">
                Contact Us
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
};

const App = (props: AppProps) => {
  return (
    <main className="h-screen text-[#121212]">
      <AppHead />
      <AppBody {...props} />
    </main>
  );
};

export default App;
