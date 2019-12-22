import React from "react";
import "./profile.scss";
import {
	IonHeader,
	IonToolbar,
	IonPage,
	IonTitle,
	IonContent,
	IonButton,
	IonCard,
	IonText,
	IonIcon
} from "@ionic/react";
import {} from "ionicons/icons";
import { connect, ReactReduxContextValue, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";

interface Props {
	user: any;
}

const Profile: React.FC<Props> = ({
	user: {
		credentials: { user, createdAt, imageUrl, bio, website, location },
		loading,
		authenticated
	}
}) => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Profile</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<p>Profile</p>
			</IonContent>
		</IonPage>
	);
};

const mapStateToProps = (state: Props) => ({
	user: state.user
});

export default connect(mapStateToProps)(Profile);
