import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { InsertContent } from "./";
import { useSelector, useDispatch } from "react-redux";
import { useUser } from "../features/user/userSlice";
import {
  setAddContent,
  isShowingContentModal,
} from "../features/addContent/addSlice";

export function SubHeader() {
  const isShowing = useSelector(isShowingContentModal);
  const user = useSelector(useUser);
  const dispatch = useDispatch();

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
      <div className="flex justify-between items-center">
        <h1 className=" text-xl font-normal tracking-wide">
          Conteúdos Recentes
        </h1>
      </div>

      <Transition
        show={user ? true : false}
        enter="transition ease duration-200 transform"
        enterFrom="opacity-0 scale-0"
        enterTo="opacity-100 scale-1"
        leave="transition ease duration-200 transform"
        leaveFrom="opacity-100 scale-1"
        leaveTo="opacity-0 scale-0"
      >
        <FontAwesomeIcon
          onClick={() => dispatch(setAddContent(true))}
          className="w-8 h-8 hover:scale-125 transition duration-300 ease-out cursor-pointer"
          data-modal-toggle="defaultModal"
          style={{ color: "#37b780" }}
          icon={faCirclePlus}
        />
      </Transition>

      {isShowing && <InsertContent />}
    </Transition>
  );
}
