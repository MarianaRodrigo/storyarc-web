//imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//redux
import { useSelector } from "react-redux";
import { useUser } from "../features/user/userSlice";
//components
import {
  ProfileHeader,
  ProfileDescription,
  ProfileContent,
  FeedContainer,
  Card,
} from "../components";

export default function Profile() {
  const currentUser = useSelector(useUser);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
  }, [currentUser]);

  return (
    <div className="flex-1 overflow-y-scroll overscroll-y-auto">
      {currentUser && (
        <>
          <ProfileHeader user={currentUser} />
          <ProfileContent />
          {/* {post && <FeedContainer>
            {post.posts.map(post => <Card key={post.id} post={post} />)}
          </FeedContainer>} */}
        </>
      )}
    </div>
  );
}
