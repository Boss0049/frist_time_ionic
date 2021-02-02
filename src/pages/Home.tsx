import {
  IonButton,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import './Home.css';
import { useGetInfo } from '@ionic/react-hooks/device';
import { useCurrentPosition } from '@ionic/react-hooks/geolocation';
import { Plugins } from '@capacitor/core';

const { openMap } = Plugins;

const Home: React.FC = () => {
  const { info } = useGetInfo();
  const { currentPosition } = useCurrentPosition();
  const goToMap = () => {
    const {
      coords: { longitude, latitude },
    } = currentPosition || { coords: {} };
    openMap.open({ longitude: 100.53, latitude: 13.75 });
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Go To Map</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLabel>{JSON.stringify(currentPosition)}</IonLabel>
        <IonButton expand={'full'} onClick={() => goToMap()}>
          Open Map
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;