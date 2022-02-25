import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InsertContent from "../components/InsertContent";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Container>
  );
}

export default MyApp;
