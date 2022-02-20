import { useRouter } from "next/router";
import db from "../../db.json";
import Card from "../components/Card";
import FeedContainer from "../components/FeedContainer";

export default function Post() {
  const router = useRouter();
  const matchedPosts = db.posts.filter((post) => {
    return post.streetName === router.query.rua;
  });
  console.log(matchedPosts);

  return (
    <div className="flex-1">
      <h1>Publicações na {router.query.rua}</h1>
      <FeedContainer>
        {matchedPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </FeedContainer>
    </div>
  );
}
