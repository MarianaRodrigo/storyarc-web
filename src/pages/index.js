import Header from "../components/Header";
import Search from "../components/Search";
import SubHeader from "../components/SubHeader";
import Card from "../components/Card";
import Footer from "../components/Footer";
import db from "../../db.json";
import FeedContainer from "../components/FeedContainer";

const content = db.posts;

export default function Home() {
  return (
    <>
      <Header />
      <SubHeader />
      <FeedContainer>
        {content.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </FeedContainer>
      <Footer />
    </>
  );
}
