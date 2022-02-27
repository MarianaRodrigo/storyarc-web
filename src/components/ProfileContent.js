

import { Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export function ProfileContent () {
    return (
  <Tabs>
    <TabPanel>
      <h2>Ver Publicações Próprias </h2>
      <img src="/images/Seta.png" alt="Seta" />
      <h2>Ver Publicações que gostei</h2>
      <img src="/images/Seta.png" alt="Seta" />
      <h2> Notificações </h2>
      <img src="/images/Seta.png" alt="Seta" />
      <h2> Sobre Aveiro Storyarc </h2>
      <img src="/images/Seta.png" alt="Seta" />
    </TabPanel>

    
  </Tabs>
    );
}