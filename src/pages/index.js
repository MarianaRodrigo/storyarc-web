import Header from "../components/Header";
import Search from "../components/Search";
import SubHeader from "../components/SubHeader";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="font-body">
      <div className="flex mt-3 px-4 items-center">
        <Header />
        <Search />
      </div>
      <SubHeader />
      <Card />
    </div>
  );
}
