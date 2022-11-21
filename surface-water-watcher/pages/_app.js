import "../styles/globals.css";
import Nav from "../components/navbar";
import Map from "../components/map";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
