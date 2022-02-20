import { useRouter } from "next/router";
import db from "../../db.json";
import Card from "../components/Card";
import FeedContainer from "../components/FeedContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Post() {
  const router = useRouter();
  const matchedPosts = db.posts.filter((post) => {
    return post.streetName === router.query.rua;
  });
  console.log(matchedPosts);

  return (
    <div className="flex-1">
      <div className="mx-4 my-6 leading-loose">
        <h1 className="text-base font-light tracking-wide pb-2">Publicações em</h1>
        <div className="flex">
          <FontAwesomeIcon className="w-5" icon={faLocationDot} />
          <h1 className="text-xl tracking-wide font-medium px-2">{router.query.rua}</h1>
        </div>
      </div>
      <FeedContainer>
        {matchedPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </FeedContainer>
    </div>
  );
}
