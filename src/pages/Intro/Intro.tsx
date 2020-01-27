import React from "react";
import "./intro.css";
import {
  IonPage,
  IonContent,
  IonSlide,
  IonSlides,
  IonButton
} from "@ionic/react";
import { Storage } from "@capacitor/core";

const Intro: React.FC<{}> = () => {
  return (
    <IonPage>
      <IonContent>
        <IonSlides pager={true} className="intro-slides">
          <IonSlide>
            <p>Slide one</p>
          </IonSlide>
          <IonSlide>
            <p>Slide Two</p>
          </IonSlide>
          <IonSlide>
            <p>Slide Three</p>
            <IonButton
              onClick={() =>
                Storage.set({
                  key: "tutorialComplete",
                  value: "true"
                }).then(() => {
                  window.location.href = "/";
                })
              }
            >
              Done
            </IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
