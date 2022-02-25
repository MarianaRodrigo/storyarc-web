import Head from "next/head";
import MapBoxMap from "./MapBoxMap";

export function AppContainer({ children }) {
  return (
    <div className="flex w-screen h-screen antialiased">
      <Head>
        <title>storyarc</title>
        <meta
          name="description"
          content="O storyarc é uma plataforma de arquivo de conteúdos que pressupõe a partilha e consulta de informações relativas a espaços e à sua evolução ao longo dos anos, de modo a preservar a memória patrimonial do distrito de Aveiro."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden sm:inline-flex flex-auto">
        <MapBoxMap />
      </div>
      <div className="w-full h-full sm:w-[460px] transition-all font-body flex flex-col">
        {children}
      </div>
    </div>
  );
}