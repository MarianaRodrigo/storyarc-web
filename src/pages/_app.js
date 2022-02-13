import '../styles/globals.css'
import Container from "../components/Container";
import "mapbox-gl/dist/mapbox-gl.css";


function MyApp({ Component, pageProps }) {
  return (
  <Container>
    <Component {...pageProps} />
  </Container>
  )
}

export default MyApp
