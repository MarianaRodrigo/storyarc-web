import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export function LocationPostHeader({ location }) {
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
      className="mx-4 my-6 leading-loose"
    >
      <h1 className="text-base font-light tracking-wide pb-2">
        Publicações em
      </h1>
      <div className="flex">
        <FontAwesomeIcon className="w-5" icon={faLocationDot} />
        <h1 className="text-xl tracking-wide font-medium px-2">{location}</h1>
      </div>
    </Transition>
  );
}
