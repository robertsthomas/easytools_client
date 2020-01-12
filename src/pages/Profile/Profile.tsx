import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { create } from "ionicons/icons";
import React from "react";
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../../redux/actions/userActions";
import "./profile.css";

interface Props {
  user: any;
  uploadImage: any;
  logoutUser: any;
}

const Profile: React.FC<Props> = ({
  uploadImage,
  logoutUser,
  user: {
    credentials: { user, createdAt, imageUrl, bio, website, location },
    loading,
    authenticated
  }
}) => {
  const handleImageChange = (event: any) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    uploadImage(formData);
  };

  const handleEditImage = () => {
    const fileInput: any = document.getElementById("profile-img-upload");
    fileInput.click();
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div id="profile-page">
          <div className="bio">
            <input
              type="file"
              id="profile-img-upload"
              hidden={true}
              onChange={handleImageChange}
            />
            <div className="avatar">
              <IonButton onClick={handleLogout}>Logout</IonButton>
              <IonAvatar>
                <IonImg src={imageUrl} />
              </IonAvatar>
              <IonIcon onClick={handleEditImage} size="large" icon={create} />
            </div>

            <IonCard>
              <IonCardContent>
                <p>lorem2040</p>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state: Props) => ({
  user: state.user
});

const mapActionsToProps = {
  logoutUser,
  uploadImage
};

export default connect(mapStateToProps, mapActionsToProps)(Profile);
