//next imports
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//packages
import { Transition } from "@headlessui/react";
import { auth } from "../firebase/firebase";
import { FiLogOut } from "react-icons/fi";
//redux
import { useSelector } from "react-redux";
import { useUser } from "../features/user/userSlice";

export function SignedInBar() {
  const user = useSelector(useUser);
  const router = useRouter();

  function logOut() {
    auth.signOut();
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
      className="flex flex-1 justify-between"
    >
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 relative border-white border rounded-full">
          <Image
            src={user.avatar ? user.avatar : "/images/user_img.png"}
            alt={user.name}
            layout="fill"
            className="rounded-full"
          />
        </div>
        <p className="font-medium">{user.name}</p>
      </div>
      <div className="flex items-center space-x-3">
        <Link href="/profile" passHref>
          <button className="bg-white text-verde px-4 h-10 rounded-md font-medium text-sm hover:scale-105 transition duration-300 ease-out">
            Ver perfil
          </button>
        </Link>

        <button
          onClick={logOut}
          className="bg-white text-verde px-2 h-10 rounded-md hover:scale-105 transition duration-300 ease-out"
        >
          <FiLogOut className="w-5 h-5" />
        </button>
      </div>
    </Transition>
  );
}
