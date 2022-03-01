import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useSelector } from "react-redux";
import { useUser } from "../features/user/userSlice";
import { useGetUserPostsQuery } from "../services/storyarc";
import { Card } from "../components";

export function ProfileContent() {
  const user = useSelector(useUser);
  const [tabIndex, setTabIndex] = useState(0);

  const { data, isFetching, isLoading } = useGetUserPostsQuery({
    uid: user.id,
  });

  console.log(user);
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
      <TabPanel>dasd</TabPanel>
      <TabPanel>banana</TabPanel>
    </Tabs>
  );
}
