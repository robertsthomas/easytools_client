import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent } from '@ionic/react';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent />
    </IonPage>
  );
};

export default Profile;
