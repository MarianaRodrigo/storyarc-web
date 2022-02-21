/* eslint-disable @next/next/no-img-element */
import db from "../../db.json";
import { timeSince } from "../../utils/timeSince"; //para calcular há quanto tempo foi publicado o post
import Link from "next/link";

export default function Card({ post }) {
  const user = db.users.find((user) => user.id === post.userId); // pesquisa quem é o dono do post

  return (
    <Link
      href={{
        pathname: `/post/${post.id}`,
      }}
      as={`/post/${post.id}`}
      passHref
    >
      <div className=" hover:scale-95 ease-out duration-300 cursor-pointer pr-4 mx-4 h-36 bg-white shadow-xl flex border rounded-lg">
        <div
          className="w-2/5 rounded-l-lg"
          style={{
            backgroundImage: `url(${post.photo})`,
            backgroundSize: "180%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-3/5 flex flex-col justify-between py-2">
          <div className="flex justify-between">
            <h1 className="flex flex-grow pl-3 font-medium text-md cursor-pointer">
              {post.title}
            </h1>
            <svg
              className="w-6 h-6 flex-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              ></path>
            </svg>
          </div>
          <div className="flex items-center pt-5 pl-3 space-x-2">
            <img
              className="w-10 h-10 rounded-full"
              src={user.avatar}
              alt={post.name}
            />
            <div className="space-y-[0.10rem]">
              <p className="text-black text-xs font-medium tracking-wide leading-none">
                {user.name}
              </p>
              <p className="text-gray-400  tracking-wide text-[0.70rem]">
                Publicado{" "}
                {timeSince(post.createdAt) === "ontem"
                  ? timeSince(post.createdAt)
                  : "há " + timeSince(post.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

