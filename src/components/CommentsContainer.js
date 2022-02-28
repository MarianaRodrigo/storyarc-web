import { Transition } from "@headlessui/react";

export function CommentsContainer({ children }) {
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
      className="w-full h-auto pb-6"
    >
      <h1 className="mx-4 pt-2">Comentários</h1>
      {children}
    </Transition>
  );
}
