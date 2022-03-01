import { Tabs,TabList, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export function ProfileContent () {
    return (
  <Tabs>
    <TabList className="flex  flex-grow items-center">
      <Tab> Publicações Próprias </Tab>
      <Tab> Publicações que gostei </Tab>
    </TabList>
  </Tabs>
    );
}