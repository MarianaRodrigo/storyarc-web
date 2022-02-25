import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { AppContainer, Header, Footer } from "../components";

function StoryArc({ Component, pageProps }) {
  return (
    <AppContainer>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppContainer>
  );
}

export default StoryArc;
