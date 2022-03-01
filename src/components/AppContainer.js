//packages
import { useEffect } from "react";
//next imports
import Head from "next/head";
//components
import MapBoxMap from "./MapBoxMap";
//redux
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";
import { setBarState } from "../features/bar/barSlice";
import { useAddUserMutation } from "../services/storyarc";
//firebase
import { auth } from "../firebase/firebase";

export function AppContainer({ children }) {
  const dispatch = useDispatch();
  const [addUser, addResults] = useAddUserMutation();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (!user.photoURL) {
          dispatch(
            setUser({
              uid: user.uid,
              name: user.displayName,
              email: user.email,
            })
          );
        } else {
          addUser({
            id: user.uid,
            avatar: user.photoURL,
            name: user.displayName,
            email: user.email,
          });
          dispatch(
            setUser({
              uid: user.uid,
              avatar: user.photoURL,
              name: user.displayName,
              email: user.email,
            })
          );
        }
      } else {
        dispatch(setUser(user));
      }
      dispatch(setBarState(false));
    });
  }, []);

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
