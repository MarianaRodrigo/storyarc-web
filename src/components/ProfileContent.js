import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from "next-image"

export function ProfileContent () {
    return (
  <Tabs>
    <TabPanel>
      <h2>Ver Publicações Próprias </h2>
      <Image src="/images/Seta.png" alt="Seta" />
      <h2>Ver Publicações que gostei</h2>
      <Image src="/images/Seta.png" alt="Seta" />
      <h2> Notificações </h2>
      <imImageg src="/images/Seta.png" alt="Seta" />
      <h2> Sobre Aveiro Storyarc </h2>
      <Image src="/images/Seta.png" alt="Seta" />
    </TabPanel>

    
  </Tabs>
    );
}