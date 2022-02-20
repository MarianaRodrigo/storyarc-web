import { useRouter } from "next/router";
import db from "../../db.json";
import Card from "../components/Card";
import FeedContainer from "../components/FeedContainer";
import LocationPostHeader from "../components/LocationPostHeader"

export default function LocationPost() {
  const router = useRouter();
  const matchedPosts = db.posts.filter((post) => {
    return post.streetName === router.query.rua;
  });
  console.log(matchedPosts);

  return (
    <div className="flex-1">
      <LocationPostHeader location={router.query.rua} />
      <FeedContainer>
        {matchedPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </FeedContainer>
    </div>
  );
}
