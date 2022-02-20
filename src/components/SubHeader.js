import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

function SubHeader() {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition ease-in duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-out duration-1000 "
      leaveFrom="opacity-100"
      leaveTo="opacity-0 "
      className="flex mx-4 justify-between items-center my-6"
    >
      <div className="flex flex-grow items-center">
        {/* <FontAwesomeIcon className="w-6 h-7" icon={faLocationDot} /> */}
        <h1 className=" text-xl font-normal tracking-wide">
          Conteúdos Recentes
        </h1>
      </div>
      <FontAwesomeIcon
        className="w-8"
        style={{ color: "#37b780" }}
        icon={faCirclePlus}
      />
    </Transition>
  );
}

export default SubHeader;
