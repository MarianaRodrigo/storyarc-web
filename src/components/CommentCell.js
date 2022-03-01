import Image from "next/image";
import { useGetCommentOwnerQuery } from "../services/storyarc";
import db from "../../db.json";

export function CommentCell({ comment }) {
  const {
    data: user,
    isLoading,
    isFetching,
  } = useGetCommentOwnerQuery({ uid: comment.userId });

  if (isLoading || isFetching) {
    return null;
  }
  return (
    <div className="flex mx-4 h-auto pt-2">
      <div className="relative h-10 w-10 rounded-full flex-none">
        <Image
          src={user[0]?.avatar ? user[0].avatar : "/images/user_img.png"}
          alt={user[0]?.name}
          layout="fill"
          priority
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col bg-gray-200 rounded-b-lg rounded-tr-lg pl-2 pr-10 pt-1 pb-2 max-w-full mr-10 ml-2">
        <h1 className="font-medium text-sm">{user[0]?.name}</h1>
        <p className="text-xs">{comment.body}</p>
      </div>
    </div>
  );
}
