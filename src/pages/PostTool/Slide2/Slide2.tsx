import React from "react";
import {
  IonGrid,
  IonRow,
  IonThumbnail,
  IonList,
  IonItem,
  IonLabel,
  IonInput
} from "@ionic/react";

import "./slide2.css";

interface Props {
  preview: any;
}

const Slide2 = ({ preview }: Props) => {
  return (
    <IonGrid id="slide2">
      <IonRow>
        <IonThumbnail>
          {preview ? (
            <img id="mlimg" src={preview} />
          ) : (
            <img src="https://via.placeholder.com/150" />
          )}
        </IonThumbnail>
      </IonRow>
      <IonRow>
        <form>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Title</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonList>
        </form>
      </IonRow>
    </IonGrid>
  );
};

export default Slide2;
