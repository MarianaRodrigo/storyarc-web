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
      className="mx-4 mt-3 mb-5 leading-loose flex flex-col"
    >
      <h1 className="font-light tracking-wide">Publicações em</h1>
      <div className="flex items-center space-x-1">
        <FontAwesomeIcon className="w-5 h-5" icon={faLocationDot} />
        <h1 className="text-xl tracking-wide font-medium">{location}</h1>
      </div>
    </Transition>
  );
}
