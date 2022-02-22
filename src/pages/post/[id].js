import { useRouter } from "next/router";
import PostHeader from "../../components/PostHeader";
import PostActions from "../../components/PostActions";
import CommentCell from "../../components/CommentCell";
import db from "../../../db.json";
import CommentsContainer from "../../components/CommentsContainer";

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
      <CommentsContainer>
        <CommentCell />
      </CommentsContainer>
    </>
  );
}
