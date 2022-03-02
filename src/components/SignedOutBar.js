import Link from "next/link";
import { useDispatch } from "react-redux";
import { setBarState } from "../features/bar/barSlice";

export function SignedOutBar() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-1 justify-center space-x-4">
      <button
        onClick={() => dispatch(setBarState(true))}
        className="bg-white text-verde px-4 py-2 rounded-md hover:scale-105 transition duration-105 ease-out"
      >
        Iniciar Sessão
      </button>
      <Link href="/criarconta" passHref>
        <button className="ring-1 px-4 py-2 ring-white rounded-md hover:scale-105 transition duration-105 ease-out">
          Criar Conta
        </button>
      </Link>
    </div>
  );
}
