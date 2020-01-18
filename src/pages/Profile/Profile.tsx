import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../../redux/actions/userActions";
import "./profile.css";
import { RouteComponentProps } from "react-router";
import { create } from "ionicons/icons";

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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div id="profile-page">
          {/* Bio section */}
          <div className="avatar">
            <IonButton onClick={handleLogout}>Logout</IonButton>
            <IonAvatar>
              <IonImg src={imageUrl} />
            </IonAvatar>
            <input
              type="file"
              id="profile-img-upload"
              hidden={true}
              onChange={handleImageChange}
            />
            <IonIcon onClick={handleEditImage} size="large" icon={create} />
          </div>
          <div className="bio">
            <IonCard>
              <IonCardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellat amet omnis laboriosam eaque minus impedit deserunt,
                  cumque distinctio architecto alias optio tenetur voluptates
                  veniam consequuntur tempore voluptatum, a placeat quo fuga,
                  dolor debitis magnam nobis labore consectetur! Magni adipisci
                  similique odio repellendus nobis. Vel itaque nihil, cupiditate
                  suscipit excepturi facere accusamus dolores officia quasi
                  similique dolore voluptates possimus consequatur ad labore est
                  repel
                </p>
              </IonCardContent>
            </IonCard>
          </div>

          {/* Bio section end */}
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
