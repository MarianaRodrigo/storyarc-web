/* eslint-disable @next/next/no-img-element */
//next imports
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
//utils
import { timeSince } from "../utils/timeSince";

export function Card({ post, isSaved }) {
  return (
    <Link
      href={{
        pathname: `/post/${post.id}`,
        query: {
          id: post.id,
        },
      }}
      as={`/post/${post.id}`}
      passHref
    >
      <Transition
        appear={true}
        show={true}
        enter="transition ease duration-700 transform"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="transition ease duration-1000 transform"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
        className="hover:scale-95 ease-out duration-300 cursor-pointer pr-4 mx-4 h-36 bg-white shadow-xl hover:shadow-sm flex border rounded-lg"
      >
        <div className="w-2/5 rounded-l-lg relative">
          <Image
            src={post.photo}
            alt={post.name}
            layout="fill"
            className="rounded-l-lg object-cover"
            priority
          />
        </div>
        <div className="w-3/5 flex flex-col justify-between py-2">
          <div className="flex justify-between max-h-12 overflow-hidden">
            <h1 className="flex flex-grow pl-3 font-medium text-md cursor-pointer">
              {post.title.length > 33
                ? post.title.slice(0, 33) + "..."
                : post.title}
            </h1>
            {isSaved ? (
              <svg
                className="w-6 h-6 flex-none"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.19 21.854a.75.75 0 0 1-1.188-.61V6.25a3.25 3.25 0 0 1 3.25-3.25h7.499A3.25 3.25 0 0 1 19 6.249v14.996a.75.75 0 0 1-1.188.609l-5.811-4.181-5.812 4.18Z"
                  fill="#212121"
                />
              </svg>
            ) : (
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
            )}
          </div>
          <div className="flex items-center pt-5 pl-3 space-x-2">
            <img
              className="w-10 h-10 rounded-full border border-verde"
              src={post.user.avatar}
              alt={post.name}
            />
            <div className="space-y-[0.10rem]">
              <p className="text-black text-xs font-medium tracking-wide leading-none">
                {post.user.name}
              </p>
              <p className="text-gray-400  tracking-wide text-[0.70rem]">
                Publicado{" "}
                {timeSince(post.createdAt) === "ontem"
                  ? timeSince(post.createdAt)
                  : timeSince(post.createdAt) === "semana passada"
                  ? "na " + timeSince(post.createdAt)
                  : "há " + timeSince(post.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Link>
  );
}
