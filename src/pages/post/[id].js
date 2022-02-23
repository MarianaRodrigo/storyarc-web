import { useRouter } from "next/router";
import { Transition } from "@headlessui/react";
import PostHeader from "../../components/PostHeader";
import PostActions from "../../components/PostActions";
import CommentsContainer from "../../components/CommentsContainer";
import CommentCell from "../../components/CommentCell";
import db from "../../../db.json";

export default function Post() {
  const router = useRouter();
  const selectedPost = db.posts.find((post) => {
    return post.id == router.query.id;
  });
  const user = db.users.find((user) => user.id === selectedPost.userId);

  const content = db.comments;

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
      className="flex-1"
    >
      <PostHeader post={selectedPost} user={user} />
      <PostActions />
      <CommentsContainer>
        {content.map((comments) => ( 
        <CommentCell key={comments.id} comments={comments}/>
        ))}
      </CommentsContainer>
    </Transition>
  );
}
