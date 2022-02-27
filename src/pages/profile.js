//imports
import { useEffect } from "react";
import { useRouter } from "next/router";
//redux
import { useSelector } from "react-redux";
import { useUser } from "../features/user/userSlice";
//components
import { ProfileHeader, ProfileDescription } from "../components";

export default function Profile() {
  const currentUser = useSelector(useUser);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, [currentUser]);

  return (
    <div className="flex-1">
      {currentUser && (
        <>
          <ProfileHeader user={currentUser} />
          <ProfileDescription user={currentUser} />
        </>
      )}
    </div>
  );
}
