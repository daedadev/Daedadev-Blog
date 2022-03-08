import Footer from "../components/footer";
import Header from "../components/header";
import GlobalContextProvider from "../context/globalContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </GlobalContextProvider>
  );
}

export default MyApp;
