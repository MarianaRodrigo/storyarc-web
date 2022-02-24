import Image from "next/image";
import db from "../../db.json";

export function CommentCell({ comment }) {
  const user = db.users.find((user) => {
    return user.id === comment.userId;
  });

  return (
    <div className="flex mx-4 h-auto pt-2">
      <div className="relative h-10 w-10 rounded-full flex-none">
        <Image
          src={user.avatar}
          alt={user.name}
          layout="fill"
          priority
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col bg-[#e6e6e6] rounded-b-lg rounded-tr-lg pl-2 pr-10 pt-1 pb-2 max-w-full mr-10 ml-2">
        <h1 className="font-medium text-sm">{user.name}</h1>
        <p className="text-xs">{comment.body}</p>
      </div>
    </div>
  );
}
