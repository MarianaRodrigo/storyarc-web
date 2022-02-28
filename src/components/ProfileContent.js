import { Tabs,TabList, Tab } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export function ProfileContent () {
    return (
  <Tabs>
    <TabList className="flex justify-center mt-6 tracking-wide">
      <Tab selectedClassName="border-b border-black">Publicações Próprias </Tab>
      
      <Tab>Publicações que gostei</Tab>
     
    </TabList>
  </Tabs>
    );
}