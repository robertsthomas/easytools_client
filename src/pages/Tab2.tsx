import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonInput,
  IonLabel,
  IonItem,
  IonIcon,
  IonCol,
  IonText
} from "@ionic/react";
import { add, addCircle } from "ionicons/icons";
import "./addtool.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Post A Tool</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="ion-no-padding" style={{ height: "100%" }}>
          <IonRow
            className="ion-justify-content-center ion-align-items-center"
            style={{ height: "100%" }}
          >
            <div
              onClick={() => {
                alert("Add tool");
              }}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <IonIcon icon={addCircle} className="ion-padding-bottom ico" />
              <IonText className="add-photo-text">
                Start by adding a photo
              </IonText>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
