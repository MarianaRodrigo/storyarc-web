// next imports
import { useRouter } from "next/router";
// components
import {
  PostHeader,
  PostDescription,
  PostActions,
  PostContent,
  CommentsContainer,
  CommentCell,
  InsertComment,
} from "../../components";
// db
import db from "../../../db.json";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const selectedPost = db.posts.find((post) => {
    return post.id == id;
  });
  const user = db.users.find((user) => user.id === selectedPost.userId);
  const postComments = db.comments.filter((comments) => comments.postId == id);

  return (
    <>
      <PostHeader post={selectedPost} user={user} />
      <PostDescription post={selectedPost} />
      <PostContent post={selectedPost} />
      <PostActions />
      <InsertComment />
      <CommentsContainer>
        {postComments.map((post) => (
          <CommentCell key={post.id} comment={post} />
        ))}
      </CommentsContainer>
    </>
  );
}
