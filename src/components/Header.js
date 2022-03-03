import { Transition } from "@headlessui/react";
import { Logo, Search } from "./";

export function Header() {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition ease duration-700 transform"
      enterFrom="opacity-0 -translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 -translate-y-full"
      className="flex flex-col sm:flex-row mt-3 px-4 sm:items-center space-y-[0.1rem] sm:space-y-0 transition-all"
    >
      <Logo />
      <Search />
    </Transition>
  );
}
