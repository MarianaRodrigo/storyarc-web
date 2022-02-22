import { useRouter } from "next/router";
import PostHeader from "../../components/PostHeader";
import PostActions from "../../components/PostActions";
import PostComments from "../../components/PostComments";
import db from "../../../db.json";

export default function Post() {
  const router = useRouter();
  const selectedPost = db.posts.find((post) => {
    return post.id == router.query.id;
  });
  const user = db.users.find((user) => user.id === selectedPost.userId);

  return (
    <>
      <PostHeader post={selectedPost} user={user} />
      <PostActions />
      <PostComments />
    </>
  );
}
