import Image from "next/image";
import { Transition } from "@headlessui/react";

export function PostContent({ post }) {
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
      className="w-full h-80 relative flex flex-none"
    >
      <Image src={post.photo} alt={post.altimg} layout="fill" priority />
    </Transition>
  );
}
