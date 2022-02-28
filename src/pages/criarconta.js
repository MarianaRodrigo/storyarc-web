import Image from "next/image";
import { Transition } from "@headlessui/react";
import { auth, googleProvider } from "../firebase/firebase";

export default function CriarConta() {
  function logInGoogle() {
    auth
      .signInWithPopup(googleProvider)
      .catch((error) => alert("Ocorreu um erro: " + error.message));
  }

  return (
    <Transition
      appear={true}
      show={true}
      enter="transition ease duration-700 transform"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full"
      className="flex-1 mx-4 space-y-4 overflow-y-scroll"
    >
      <h1 className="text-2xl pt-4">Criar conta</h1>
      <div className="flex flex-col w-full space-y-1">
        <p className="text-sm">Insere o teu nome</p>
        <input
          type="text"
          placeholder="Nome"
          className="w-full h-12 shadow-xl border-[0.1px] px-4 rounded-md focus:outline-none text-sm"
        />
      </div>
      <div className="flex flex-col w-full space-y-1">
        <p className="text-sm">Insere o teu email</p>
        <input
          type="text"
          placeholder="Email"
          className="w-full h-12 shadow-xl border-[0.1px] px-4 rounded-md focus:outline-none text-sm"
        />
      </div>
      <div className="flex flex-col w-full space-y-1">
        <p className="text-sm">Insere uma password</p>
        <input
          type="password"
          placeholder="Password"
          className="w-full h-12 shadow-xl border-[0.1px] px-4 rounded-md focus:outline-none text-sm"
        />
      </div>
      <div className="flex flex-col w-full space-y-1">
        <p className="text-sm">Confirma a tua password</p>
        <input
          type="password"
          placeholder="Confirma a password"
          className="w-full h-12 shadow-xl border-[0.1px] px-4 rounded-md focus:outline-none text-sm"
        />
      </div>
      <button
        // onClick={logInEmail}
        className="px-4 py-3 bg-verde w-full rounded-lg text-white"
      >
        Iniciar sessão
      </button>
      <div className="flex flex-col items-center justify-center space-y-4">
        <p>ou</p>
        <button
          onClick={logInGoogle}
          className="flex items-center px-4 py-2 h-12 w-[16.8rem] border-[0.1px] bg-white drop-shadow-xl text-black rounded-md space-x-2 hover:scale-105 transition duration-105 ease-out"
        >
          <Image
            src="/images/glogo.png"
            alt="google logo"
            width="24rem"
            height="24rem"
          />
          <span className="text-sm tracking-wide">
            Inicia sessão com o Google
          </span>
        </button>
      </div>
    </Transition>
  );
}
