import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelector } from "react-redux";
import { useUser } from "../features/user/userSlice";
import {
  useGetUserPostsQuery,
  useGetUserSavedPostsQuery,
} from "../services/storyarc";
import { Card, EmptyCommentsSection } from "../components";

export function ProfileContent() {
  const user = useSelector(useUser);
  const [tabIndex, setTabIndex] = useState(0);

  const {
    data: userPosts,
    isFetching: userPostsFetching,
    isLoading: userPostsLoading,
  } = useGetUserPostsQuery({ uid: user.id });

  const {
    data: savedPosts,
    isFetching: savedPostsFetching,
    isLoading: savedPostsLoading,
  } = useGetUserSavedPostsQuery();

  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
      className="my-2 py-2"
      selectedTabClassName="bg-black text-white rounded"
    >
      <TabList className="flex justify-center">
        <Tab>Publicações próprias</Tab>
        <Tab>Favoritos</Tab>
      </TabList>
      <TabPanel className="pt-4">
        {userPostsFetching || userPostsLoading ? (
          <>
            <h1>loading...</h1>
          </>
        ) : userPosts.length > 0 ? (
          userPosts.map((post) => <Card key={post.id} post={post} />)
        ) : (
          <EmptyCommentsSection text="Sem Publicações" />
        )}
      </TabPanel>
      <TabPanel>
        {savedPostsFetching || savedPostsLoading ? (
          <>
            <h1>loading...</h1>
          </>
        ) : savedPosts[0]?.posts.length > 0 ? (
          <div className="space-y-4">
            {savedPosts[0].posts.map((post) => (
              <Card key={post.id} post={post} isSaved />
            ))}
          </div>
        ) : (
          <EmptyCommentsSection text="Sem Publicações" />
        )}
      </TabPanel>
    </Tabs>
  );
}
