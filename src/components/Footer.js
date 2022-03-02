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
    <div ref={ref} style={{ position: "fixed", width: "inherit", bottom: 0 }}>
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
          "flex px-4 items-center justify-between rounded-t-md duration-[250ms] ease-in-out transition-all " +
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
