import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>storyarc</title>
        <meta
          name="description"
          content="O storyarc é uma plataforma de arquivo de conteúdos que pressupõe a partilha e consulta de informações relativas a espaços e à sua evolução ao longo dos anos, de modo a preservar a memória patrimonial do distrito de Aveiro."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-xl h-screen mx-auto">
        <img src="./images/header_logo.png" alt="storyarc logo"></img>
        <div className="flex space-x-2">
          <div className="bg-azul h-20 w-20"></div>
          <div className="bg-verde h-20 w-20"></div>
          <div className="bg-branco h-20 w-20 border border-black"></div>
          <div className="bg-preto h-20 w-20"></div>
        </div>
      </div>
    </div>
  );
}
