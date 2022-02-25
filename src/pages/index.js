import { SubHeader, Card, FeedContainer } from "../components";
import db from "../../db.json";

const content = db.posts;

export default function Home() {
  return (
    <>
      <SubHeader />
      <FeedContainer>
        {content.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </FeedContainer>
    </>
  );
}
