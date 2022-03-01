import { Transition } from "@headlessui/react";

export default function SearchResultsContainer({ children }) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition ease duration-300 transform"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate--0"
      leaveTo="opacity-0 translate-y-full"
      className="relative shadow-md z-50"
    >
      <ul className="absolute w-full bg-white rounded-b-lg max-h-80 overflow-auto shadow-md">
        {children}
      </ul>
    </Transition>
  );
}
