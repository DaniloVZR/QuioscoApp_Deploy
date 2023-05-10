import { QuioscoProvider } from "../context/QuioscoProvider"
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  );
};

export default MyApp;