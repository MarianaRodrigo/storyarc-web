import { Transition } from "@headlessui/react";
import { useState } from "react";

export function PostActions() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Transition
      appear={true}
      show={true}
      enter="transition ease duration-700 transform"
      enterFrom="opacity-0 translate-x-full"
      enterTo="opacity-100 translate-x-0"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-full"
      className="border-y justify-center items-center flex py-3 mt-2 cursor-pointer "
      onClick={() => setIsSaved(!isSaved)}
    >
      {isSaved ? (
        <svg
          className="w-6 h-6 flex-none"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.19 21.854a.75.75 0 0 1-1.188-.61V6.25a3.25 3.25 0 0 1 3.25-3.25h7.499A3.25 3.25 0 0 1 19 6.249v14.996a.75.75 0 0 1-1.188.609l-5.811-4.181-5.812 4.18Z"
            fill="#212121"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 flex-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          ></path>
        </svg>
      )}
      <p className="ml-2 text-gray-500 font-medium">
        {isSaved ? "Guardado" : "Guardar"}
      </p>
    </Transition>
  );
}
