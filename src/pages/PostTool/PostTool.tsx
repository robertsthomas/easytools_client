import React, { useEffect, useState, useRef } from "react";
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
  IonText,
  IonSlides,
  IonSlide,
  IonImg,
  IonButton,
  IonThumbnail,
  IonList
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import "./style/style.css";
import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";

const PostTool: React.FC = () => {
  const [preview, setPreview] = useState();
  const [slide, setSlide] = useState(2);

  useEffect(() => {}, []);

  const nextSlide = () => {
    setSlide(slide + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Post A Tool</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="post-tool">
          {(() => {
            switch (slide) {
              case 1:
                return <Slide1 setPreview={setPreview} nextSlide={nextSlide} />;

              case 2:
                return <Slide2 preview={preview} />;
            }
          })()}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PostTool;
