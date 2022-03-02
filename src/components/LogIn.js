import { useRef } from "react";
import Image from "next/image";
import { auth, googleProvider } from "../firebase/firebase";

export function LogIn() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  function logInGoogle() {
    auth
      .signInWithPopup(googleProvider)
      .catch((error) => alert("Ocorreu um erro: " + error.message));
  }

  function logInEmail() {
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .catch((err) => {
        if (err.code === "auth/wrong-password") {
          alert("Password incorreta");
        } else {
          alert(err.message);
        }
      });
  }

  return (
    <div className="flex flex-1 flex-col h-full w-full justify-center items-center space-y-4">
      <div className="flex flex-col shadow border-[0.1px] rounded-lg py-3 w-[16.8rem] ">
        <input
          ref={emailRef}
          type="text"
          placeholder="Email"
          className=" focus:outline-none border-b px-4 pb-3"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className=" focus:outline-none px-4 pt-3"
        />
      </div>
      <button
        onClick={logInEmail}
        className="px-4 py-3 bg-verde w-[16.8rem] rounded-lg text-white hover:scale-105 transition duration-105 ease-out"
      >
        Iniciar sessão
      </button>
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
          priority
        />
        <span className="text-sm tracking-wide">
          Inicia sessão com o Google
        </span>
      </button>
    </div>
  );
}
