import React, { useEffect } from "react";
import {
  IonGrid,
  IonRow,
  IonThumbnail,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCol
} from "@ionic/react";

import "./styles/slide2.css";

interface Props {
  toolValues: any;
  handleToolSubmit: any;
  handleToolChange: any;
}

const Slide2: React.FC<Props> = ({
  toolValues,
  handleToolSubmit,
  handleToolChange
}) => {
  useEffect(() => {
    console.log(toolValues);
  });
  return (
    <IonGrid id="slide2">
      <IonRow>
        {(toolValues.preview || []).map((url: any) => (
          <IonCol size="4">
            <img src={url} alt="..." />
          </IonCol>
        ))}
      </IonRow>
      <IonRow>
        <form>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Tool Name</IonLabel>
              <IonInput
                name="name"
                type="text"
                placeholder="ex: Power Drill"
                onInput={handleToolChange}
              ></IonInput>
            </IonItem>
          </IonList>
          <IonButton onClick={e => handleToolSubmit(e)}>Create</IonButton>
        </form>
      </IonRow>
    </IonGrid>
  );
};

export default Slide2;
