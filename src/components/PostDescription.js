import { Transition } from "@headlessui/react";

export function PostDescription({ desc }) {
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
      className="flex pb-4 mx-4"
    >
      <p className="font-normal text-sm">{desc}</p>
    </Transition>
  );
}
