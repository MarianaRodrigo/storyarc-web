// next imports
import { useRouter } from "next/router";
//redux
import { useSelector } from "react-redux";
import { useUser } from "../../features/user/userSlice";
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
  const currentUser = useSelector(useUser);
  const selectedPost = db.posts.find((post) => {
    return post.id == id;
  });
  const user = db.users.find((user) => user.id === selectedPost.userId);
  const postComments = db.comments.filter((comments) => comments.postId == id);

  return (
    <div className="flex flex-col flex-1 h-full overflow-y-scroll scroll-smooth">
      <PostHeader post={selectedPost} user={user} />
      <PostDescription post={selectedPost} />
      <PostContent post={selectedPost} />
      {currentUser && (
        <>
          <PostActions />
          <InsertComment postId={selectedPost.id} />
        </>
      )}
      <CommentsContainer>
        {postComments.map((post) => (
          <CommentCell key={post.id} comment={post} />
        ))}
      </CommentsContainer>
    </div>
  );
}
