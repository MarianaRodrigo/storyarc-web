import { useRouter } from "next/router";
import { Card, FeedContainer, LocationPostHeader } from "../../components";
import db from "../../../db.json";

export default function LocationPost() {
  const router = useRouter();
  const matchedPosts = db.posts.filter((post) => {
    return post.streetName === router.query.rua;
  });

  return (
    <>
      <LocationPostHeader location={router.query.rua} />
      <FeedContainer>
        {matchedPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </FeedContainer>
    </>
  );
}
