import db from "../../db.json";
import { timeSince } from "../../utils/timeSince"; //para calcular há quanto tempo foi publicado o post

function Card({ post }) {
  const user = db.users.find((user) => user.id === post.userId); // pesquisa quem é o dono do post

  return (
    <div className="pr-4 mx-4  bg-white shadow-xl flex border rounded-lg">
      <div
        className="w-2/5 rounded-l-lg"
        style={{
          backgroundImage: `url(${post.photo})`,
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-3/5 py-3">
        <div className="flex space-between">
          <h1 key={post.id} className="flex flex-grow pl-3 font-medium">
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
              strokelinejoin="round"
              strokewidth="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            ></path>
          </svg>
        </div>
        <div className="flex items-center pt-5 pl-3 space-x-2">
          <img
            img
            key={post.id}
            className="w-9 h-9 rounded-full"
            src={post.photo}
            alt={post.altimg}
          />
          <div>
            <p key={post.id} className="text-black text-sm leading-none mt-1">
              {user.name}
            </p>
            <p key={post.id} className="text-gray-400 text-xs">
              Publicado {timeSince(post.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
