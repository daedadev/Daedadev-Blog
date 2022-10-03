import Footer from "../components/footer";
import GlobalContextProvider, { IGlobalContext, useGlobal } from "../context/globalContext";

export function Wrapper({ children }: any) {
  const {darkMode} = useGlobal();

  return (
      <div className={darkMode ? 'dark' : ''}>
        { children }
      </div>
  );
}