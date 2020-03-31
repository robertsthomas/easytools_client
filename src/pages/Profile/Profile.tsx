import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonSegment,
  IonTitle,
  IonToolbar,
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol
} from "@ionic/react";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../../redux/actions/userActions";
import "./profile.css";
import { RouteComponentProps } from "react-router";
import LoginModel from "../../Components/LoginModel/LoginModel";

import axios from "axios";

interface Props extends RouteComponentProps<any> {
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
    tools,
    authenticated
  },
  history
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
    logoutUser(history);
  };

  const LoginToProfile = () => {
    return (
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <IonButton onClick={() => history.replace("/login")}>Login</IonButton>
          <IonButton onClick={() => history.replace("/signup")}>
            Signup
          </IonButton>
        </IonRow>
      </IonGrid>
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {authenticated &&
        <div id="profile-page">
          <div className="profile-bg bg-block" style={{position: 'relative', zIndex: 0}}>
            <p style={{color: 'red', position: 'absolute', bottom: 0}}>Test</p>
          </div>

          <div>
            <IonAvatar>
              <img src={imageUrl} />
            </IonAvatar>
          </div>
        </div>
}
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
