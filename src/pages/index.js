import Header from "../components/Header";
import Search from "../components/Search";
import SubHeader from "../components/SubHeader";
import Card from "../components/Card";
import Footer from "../components/Footer";
import db from "../../db.json";


const content = db.posts;

export default function Home() {
  return (
    <div className="font-body">
      <div className="flex mt-3 px-4 items-center">
        <Header />
        <Search />
      </div>
      <SubHeader />
      {content.map((post) => (
      <Card key={post.id} post={post} />
      ))}
      
    </div>
  );
}
