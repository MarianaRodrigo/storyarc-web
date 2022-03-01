// next imports
import { useRouter } from "next/router";
//redux
import { useSelector } from "react-redux";
import { useUser } from "../../features/user/userSlice";
import {
  useGetPostWithUserAndCommentsDataQuery,
  useGetPostCommentsQuery,
} from "../../services/storyarc";
// components
import {
  PostHeader,
  PostDescription,
  PostActions,
  PostContent,
  CommentsContainer,
  CommentCell,
  InsertComment,
  Loader,
  EmptyCommentsSection,
} from "../../components";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const currentUser = useSelector(useUser);
  const {
    data: post,
    isLoading,
    isFetching,
    error,
  } = useGetPostWithUserAndCommentsDataQuery({ postId: id });

  const {
    data: comments,
    isLoading: commentsLoading,
    isFetching: commentsFetching,
    refetch,
  } = useGetPostCommentsQuery({ postId: id });

  if (isLoading || isFetching) {
    return (
      <div className="flex flex-1 items-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    router.push("/404");
    return null;
  }

  return (
    <div className="flex flex-col flex-1 h-full overflow-y-scroll scroll-smooth">
      <PostHeader
        user={post.user}
        date={post.createdAt}
        postType={post.postType}
      />
      <PostDescription desc={post.title} />
      <PostContent
        image={post.photo}
        newImage={post.new_photo}
        alt={post.altimg}
      />
      {currentUser && (
        <>
          <PostActions />
          <InsertComment postId={post.id} refetch={refetch} />
        </>
      )}
      <CommentsContainer>
        {commentsLoading || commentsFetching ? (
          <>
            <h1>loading...</h1>
          </>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCell key={comment.id} comment={comment} />
          ))
        ) : (
          <EmptyCommentsSection />
        )}
      </CommentsContainer>
    </div>
  );
}
