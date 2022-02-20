import SubHeader from "../components/SubHeader";
import Card from "../components/Card";
import db from "../../db.json";
import FeedContainer from "../components/FeedContainer";

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
