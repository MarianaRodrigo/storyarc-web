import { useRouter } from "next/router";
import {
  Card,
  FeedContainer,
  LocationPostHeader,
  Loader,
} from "../../components";
import { useGetSearchResultsQuery } from "../../services/storyarc";

export default function LocationPost() {
  const router = useRouter();
  const { rua } = router.query;
  const {
    data: searchResults,
    isLoading,
    isFetching,
    error,
  } = useGetSearchResultsQuery({ rua: rua });

  if (isLoading || isFetching) {
    return (
      <div className="flex flex-1 items-center">
        <Loader />
      </div>
    );
  }
  if (error) {
    router.push("/404");
    return null;
  }

  return (
    <>
      <LocationPostHeader location={router.query.rua} />
      <FeedContainer>
        {searchResults.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </FeedContainer>
    </>
  );
}
