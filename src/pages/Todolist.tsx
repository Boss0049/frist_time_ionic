import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonFab,
  IonFabButton,
  IonIcon,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
  IonActionSheet,
} from '@ionic/react';
import { add, trash, copy } from 'ionicons/icons';
import { Plugins } from '@capacitor/core'
import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';

import Todo from '../components/Todo';

const todos = [
  { id: 1, name: 'Go To Work', deadline: 5 },
  { id: 2, name: 'Buy a Skooldio Course', deadline: 2 },
  { id: 3, name: 'Finish a Skooldio Course', deadline: 1 },
];

const { Haptics } = Plugins;

const Todolist: React.FC<RouteComponentProps> = (props) => {
  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter TodoList Page');
  });

  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter TodoList Page');
  });

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave TodoList Page');
  });

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave TodoList Page');
  });

  const [showActionSheet, setShowActionSheet] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tanatepon Kulrattanarak</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tanatepon Kulrattanarak</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                onClickAction={() => {
                  setShowActionSheet(true);
                  setSelectedId(todo.id);
                  Haptics.vibrate()
                }}
              />
            );
          })}
        </IonList>
        <IonFab vertical='bottom' horizontal='end' slot='fixed'>
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonActionSheet
          isOpen={showActionSheet}
          onDidDismiss={() => setShowActionSheet(false)}
          buttons={[
            {
              text: 'Delete',
              icon: trash,
              role: 'destructive',
              handler: () => {
                alert(`Delete task id: ${selectedId}`);
              },
            },
          ]}
        ></IonActionSheet>
      </IonContent>
    </IonPage>
  );
};

export default Todolist;