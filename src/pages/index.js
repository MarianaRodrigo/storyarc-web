import { SubHeader, Card, FeedContainer, Loader } from "../components";
import { useGetAllPostQuery } from "../services/storyarc";

export default function Home() {
  const { data, isFetching, isLoading } = useGetAllPostQuery();

  if (isLoading || isFetching) {
    return (
      <div className="flex flex-1 items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <SubHeader />
      <FeedContainer>
        {data.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </FeedContainer>
    </>
  );
}
