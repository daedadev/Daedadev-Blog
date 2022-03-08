import Footer from "../components/footer";
import GlobalContextProvider from "../context/globalContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
      <Footer />
    </GlobalContextProvider>
  );
}

export default MyApp;
