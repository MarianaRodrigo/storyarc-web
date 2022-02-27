import { useEffect } from "react";
import { useRouter } from "next/router";
import ProfileHeader from "../components/ProfileHeader";
import ProfileDescription from "../components/ProfileDescription";
import { useSelector } from "react-redux";
import { useUser } from "../features/user/userSlice";

export default function Profile() {
  const currentUser = useSelector(useUser);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, [currentUser]);

  console.log(currentUser);
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
