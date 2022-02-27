import { useEffect } from "react";
import { Transition } from "@headlessui/react";
import { useClickOutside } from "@mantine/hooks";
import { useSelector, useDispatch } from "react-redux";
import { useUser } from "../features/user/userSlice";
import { useBarState, setBarState } from "../features/bar/barSlice";
import { SignedInBar, SignedOutBar, LogIn } from "./";

export function Footer() {
  const dispatch = useDispatch();
  const user = useSelector(useUser);
  const isExpanded = useSelector(useBarState);

  function onKeyDown(e) {
    if (e.key === "Escape") {
      dispatch(setBarState(false));
    }
  }

  const ref = useClickOutside(
    () => dispatch(setBarState(false)),
    ["mouseup", "touchend"]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={ref}>
      <Transition
        appear={true}
        show={true}
        enter="transition ease duration-700 transform"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease duration-1000 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
        className={
          "flex px-4 items-center justify-between w-full rounded-t-md duration-[250ms] ease-in-out transition-all " +
          (isExpanded
            ? "h-96 bg-white border-t-2 drop-shadow-md"
            : "h-16 bg-[#37b780] text-white ")
        }
      >
        {user ? <SignedInBar /> : isExpanded ? <LogIn /> : <SignedOutBar />}
      </Transition>
    </div>
  );
}

{
  /* <div className="flex flex-grow space-x-2">
<FontAwesomeIcon className="w-6 h-6" icon={faUser} />
<h1 className="font-light tracking-wide">Iniciar Sessão</h1>
</div>

<svg
className="w-6 h-6"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
xmlns="http://www.w3.org/2000/svg"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
></path>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
></path>
</svg> */
}
