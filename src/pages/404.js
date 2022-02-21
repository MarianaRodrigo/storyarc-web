import Image from "next/image";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";

export default function Custom404() {
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition ease duration-700 transform"
      enterFrom="opacity-0 scale-0"
      enterTo="opacity-100 scale-1"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-full"
      className="flex flex-col items-center space-between flex-1 py-10"
    >
      <p className="font-semibold tracking-widest text-xl text-[#37b780]">
        Pareces estar perdido na historia
      </p>
      <div className="flex-1 flex h-full items-center">
        <div className="w-64 h-64 relative">
          <Image
            src="/images/ampulheta.png"
            alt="ampulheta"
            layout="fill"
            priority
          />
        </div>
      </div>
      <p className="font-normal tracking-widest text-gray-500">
        Clica
        <button
          onClick={handleClick}
          className="rounded px-4 py-2 mx-2 bg-[#37b780] text-white tracking-widest font-semibold cursor-pointer shadow-xl hover:scale-95 hover:shadow-sm transition ease-out duration-100"
        >
          aqui
        </button>
        para voltares ao presente
      </p>
    </Transition>
  );
}
