/* eslint-disable @next/next/no-img-element */
import db from "../../db.json";
import { timeSince } from "../../utils/timeSince";
import Link from "next/link";




export default function PostHeader({post}) {

    const user = db.users.find((user) => user.id === post.userId);

    return (
            <Link
              href={{
                pathname: `/post/${post.id}`,
              }}
              as={`/post/${post.id}`}
              passHref
            >
        <div className="mx-4 my-6 flex-1">
            <div className="flex items-center pb-4">
                <img className="w-10 h-10 rounded-full mr-4" 
                src={user.avatar}
                alt={post.name} />
                <div className="text-sm">
                    <p className="text-normal font-medium tracking-wide leading-none">{user.name}</p>
                    <p className="text-xs font-light tracking-wide">Publicado{" "}
                {timeSince(post.createdAt) === "ontem"
                  ? timeSince(post.createdAt)
                  : "há " + timeSince(post.createdAt)}</p>
                </div>
            </div>
            <p className="font-normal text-sm pb-2">{post.streetName}</p>
            <img 
                src={post.photo}
                alt={altimg}
            />
        </div>
              <div>
                  <h2> Guardar</h2>
                  <img 
                    src="/images/logo.png"
                    alt="icon guardar"
                    />
              </div>
              
      </Link>
    );
}