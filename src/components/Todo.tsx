import React from "react";
import { IonItem, IonLabel, IonCheckbox, IonBadge, IonIcon, IonRadio } from "@ionic/react";
import { ellipsisVerticalOutline } from "ionicons/icons";

type TodoProps = {
  id: number;
  name: string;
  deadline?: number;
  onClickAction?: () => void;
};

const Todo: React.FC<TodoProps> = ({ id, name, deadline,onClickAction }) => (
  <IonItem>
    <IonCheckbox slot='start' />
    <IonCheckbox hidden={true} />
    <IonLabel>{name}</IonLabel>{" "}
    <IonBadge color='success' slot='end'>
      {deadline} Days
    </IonBadge>
    <IonIcon icon={ellipsisVerticalOutline} slot='end' onClick={onClickAction}></IonIcon>
  </IonItem>
);

export default Todo;
