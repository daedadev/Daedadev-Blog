import Footer from "../components/footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
