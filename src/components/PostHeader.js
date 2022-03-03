import Image from "next/image";
import { Transition } from "@headlessui/react";
import { timeSince } from "../utils/timeSince";
import { MdFlip } from "react-icons/md";

export function PostHeader({ date, user, postType }) {
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
      className="flex items-center pb-2 px-4 mt-4 justify-between"
    >
      <div className="flex space-x-2">
        <div className="relative h-10 w-10">
          <Image
            src={user.avatar}
            alt={user.name}
            layout="fill"
            priority
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col ">
          <p className="font-medium text-sm tracking-wide">{user.name}</p>
          <p className="text-xs font-light tracking-wide">
            Publicado{" "}
            {timeSince(date) === "ontem"
              ? timeSince(date)
              : timeSince(date) === "semana passada"
              ? "na " + timeSince(date)
              : "há " + timeSince(date)}
          </p>
        </div>
      </div>
      {postType === "comparacao" && <MdFlip className="w-6 h-6" />}
    </Transition>
  );
}
