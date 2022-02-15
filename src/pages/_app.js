import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Container from "../components/Container";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
