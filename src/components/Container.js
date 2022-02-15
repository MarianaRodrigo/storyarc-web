import Head from "next/head";
import Map from "./Map";

export default function Container({ children }) {
  return (
    <div className="flex w-screen h-screen">
      <Head>
        <title>storyarc</title>
        <meta
          name="description"
          content="O storyarc é uma plataforma de arquivo de conteúdos que pressupõe a partilha e consulta de informações relativas a espaços e à sua evolução ao longo dos anos, de modo a preservar a memória patrimonial do distrito de Aveiro."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div className="w-9/12">
        <Map />
      </div>
      <div className="w-3/12">{children}</div>
    </div>
  );
}
