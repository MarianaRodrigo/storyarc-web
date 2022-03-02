import { Transition } from "@headlessui/react";

export function FeedContainer({ children }) {
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
      className="flex-1 w-full h-full space-y-4 pb-20 overflow-y-scroll overscroll-y-contain scroll-smooth shadow-inner"
    >
      {children}
    </Transition>
  );
}
