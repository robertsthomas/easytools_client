import React from "react";
import { IonGrid, IonRow, IonIcon, IonText } from "@ionic/react";
import { addCircle, images } from "ionicons/icons";
import "./styles/slide1.css";
import { read } from "fs";

interface Props {
  nextSlide: Function;
  toolValues: any;
  setToolValues: React.Dispatch<any>;
}

const Slide1: React.FC<Props> = ({ nextSlide, setToolValues, toolValues }) => {
  const handleUploadImage = () => {
    const fileInput: any = document.getElementById("tool-img-upload");
    fileInput.click();
  };

  const handleImageChange = async (event: any) => {
    event.preventDefault();

    const formData = new FormData();
    const reader = new FileReader();

    let image = event.target.files[0];
    reader.readAsDataURL(image);
    console.log(image)
    reader.onloadend = async () => {
      const base64Image = reader.result as string;
      formData.set('file', base64Image)

      console.log(base64Image)
      setToolValues({
        ...toolValues,
        preview: base64Image
      });
    }



    await nextSlide();
  };

  return (
    <IonGrid id="slide1">
      <IonRow>
        <div className="upload" onClick={handleUploadImage}>
          <IonIcon icon={addCircle} className="ion-padding-bottom" />

          <IonText>Start by adding a photo</IonText>
          <input
            type="file"
            multiple
            name="preview"
            id="tool-img-upload"
            hidden={true}
            onChange={handleImageChange}
          />
        </div>
      </IonRow>
    </IonGrid>
  );
};

export default Slide1;
