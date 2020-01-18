import React from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
// import { book, build, colorFill, grid } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import "./Home.css";
import Tools from "../../Components/Tools/Tools";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Tools />
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: any) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Home);
