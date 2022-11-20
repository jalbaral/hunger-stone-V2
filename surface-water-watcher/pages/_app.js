import "../styles/globals.css";
import Navbar from "../components/navbar";
import Map from "../components/map";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
