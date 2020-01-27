import React, { useEffect, useState } from "react";
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
  IonImg
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import "./style/style.css";

declare var ml5: any;

const PostTool: React.FC = () => {
  const [img, setImg] = useState("");
  const [preview, setPreview] = useState();
  const handleUploadImage = () => {
    const fileInput: any = document.getElementById("tool-img-upload");
    fileInput.click();
  };

  const handleImageChange = (event: any) => {
    event.preventDefault();

    let reader = new FileReader();

    let image = event.target.files[0];
    reader.onloadend = () => {
      setImg(image);
      setPreview(reader.result);
    };

    reader.readAsDataURL(image);
  };

  let $imagePreview = null;
  if (preview) {
    $imagePreview = <img src={preview} />;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Post A Tool</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides className="post-slides">
          {/* SLIDE 1: Add Photo Slide */}
          <IonSlide>
            <IonGrid className="ion-no-padding" style={{ height: "100%" }}>
              <IonRow
                className="ion-justify-content-center ion-align-items-center"
                style={{ height: "100%" }}
              >
                <div
                  onClick={handleUploadImage}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column"
                  }}
                >
                  <IonIcon
                    icon={addCircle}
                    className="ion-padding-bottom ico"
                  />
                  {$imagePreview}
                  <input
                    type="file"
                    id="tool-img-upload"
                    hidden={true}
                    onChange={handleImageChange}
                  />
                  <IonText className="add-photo-text">
                    Start by adding a photo
                  </IonText>
                </div>
              </IonRow>
            </IonGrid>
          </IonSlide>
          {/* End Add Photo Slide */}

          {/* SLIDE 2: Photo ML details and post info */}
          <IonSlide></IonSlide>
          {/* END Photo ML details and post info */}
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default PostTool;
