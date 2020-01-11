import React from "react";
import "./profile.css";
import {
  IonHeader,
  IonToolbar,
  IonPage,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonAvatar,
  IonImg,
  IonText,
  IonIcon
} from "@ionic/react";
import { create } from "ionicons/icons";
import { connect, ReactReduxContextValue, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser, uploadImage } from "../../redux/actions/userActions";

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
            <IonAvatar className="avatar">
              <IonImg class="img" src={imageUrl} />
            </IonAvatar>
            <IonCard className="bio-card">
              <IonCardContent className="card-content">
                <IonGrid>
                  <IonRow>
                    <IonCol>{user}</IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
          </div>

          <input
            type="file"
            id="profile-img-upload"
            hidden={true}
            onChange={handleImageChange}
          />

          <IonIcon onClick={handleEditImage} size="large" icon={create} />
          <br />
          <IonButton onClick={handleLogout}>Logout</IonButton>
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
