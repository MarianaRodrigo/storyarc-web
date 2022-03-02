//imports
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
//redux
import { useSelector } from "react-redux";
import { useUser } from "../features/user/userSlice";
//components
import { ProfileHeader, ProfileContent } from "../components";

export default function Profile() {
  const currentUser = useSelector(useUser);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, [currentUser]);

  return (
    <Transition
      appear={true}
      show={true}
      enter="transition ease duration-700 transform"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease duration-1000 transform"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-full"
      className="flex-1 overflow-y-scroll overscroll-y-auto pb-20"
    >
      {currentUser && (
        <>
          <ProfileHeader user={currentUser} />
          <ProfileContent />
        </>
      )}
    </Transition>
  );
}
