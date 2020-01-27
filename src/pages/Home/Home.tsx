import React from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRefresher,
  IonRefresherContent
} from "@ionic/react";
// import { book, build, colorFill, grid } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import "./Home.css";
import Tools from "../../Components/Tools/Tools";

const Home: React.FC = () => {
  const doRefresh = (event: any) => {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.detail.complete();
    }, 2000);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <Tools />
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Home);
