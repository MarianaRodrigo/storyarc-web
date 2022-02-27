//imports
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
//redux
import { useSelector } from "react-redux";
import { useUser } from "../features/user/userSlice";
//components
import { ProfileHeader, ProfileDescription, ProfileContent , FeedContainer, Card } from "../components";

export default function Profile() {
  const currentUser = useSelector(useUser);
  const router = useRouter();
  const [post, setPosts] = useState(null);

  async function fetchData() {
    const response = await fetch('https://storyarc-fake-api.herokuapp.com/users/2/savedPosts')
    const data = await response.json();
    setPosts(data)
    console.log(data)
  }

  useEffect(() => {
    if (!currentUser) {
      router.push("/");
    }
    fetchData();
  }, [currentUser]);

  return (
    <div className="flex-1">
      {currentUser && (
        <>
          <ProfileHeader user={currentUser} />
          <ProfileDescription user={currentUser} />
          <ProfileContent />
          {/* {post && <FeedContainer>
            {post.posts.map(post => <Card key={post.id} post={post} />)}
          </FeedContainer>} */}
        </>
      )}
    </div>
  );
}
