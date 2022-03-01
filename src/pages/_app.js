import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { AppContainer, Header, Footer } from "../components";

function StoryArc({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppContainer>
    </Provider>
  );
}

export default StoryArc;
