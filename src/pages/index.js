import Header from "../components/Header";
import Search from "../components/Search";
import SubHeader from "../components/SubHeader";

export default function Home() {
  return (
    <div className="font-body">
      <div className="flex">
        <Header />
        <Search />
      </div>
      <SubHeader />
    </div>
  );
}
