import Footer from "../components/footer";
import { Wrapper } from "../components/wrapper";
import GlobalContextProvider, { IGlobalContext, useGlobal } from "../context/globalContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
      <GlobalContextProvider>
        <Wrapper>
          <Component {...pageProps} />
          <Footer />
        </Wrapper>
      </GlobalContextProvider>
  );
}

export default MyApp;
