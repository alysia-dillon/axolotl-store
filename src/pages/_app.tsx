import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../../store";
import "@deps/styles/globals.css";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons/faPaw";
import { DEFAULT_PAGE_TITLE } from "@deps/constants/formats";
import Link from "next/link";
import UnderConstructionBanner from "@deps/components/under-construction-banner/UnderConstructionBanner";

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
          <Link href="/" className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faPaw}
              height={35}
              width={35}
              className="color-[#121212]"
            />
            Pet Shop Name
          </Link>
          <ul className="flex gap-4 font-semibold">
            <li>
              <Link href="/about" className="group transition duration-300">
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/available-pets"
                className="group transition duration-300"
              >
                Available Pets
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-sky-600"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/adopt-a-pet"
                className="group transition duration-300"
              >
                Adopt A Pet
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
      <UnderConstructionBanner />
      <AppHead />
      <Provider store={store}>
        <AppBody {...props} />
      </Provider>
    </main>
  );
};

export default App;
