import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export function ProfileContent () {
    return (
  <Tabs>
    <TabPanel>
      <h2>Ver Publicações Próprias</h2>
      <h2>Ver Publicações que gostei</h2>
      <h2> Notificações </h2>
      <h2> Sobre Aveiro Storyarc </h2>
    </TabPanel>

    
  </Tabs>
    );
}