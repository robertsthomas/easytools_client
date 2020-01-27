import React from "react";
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
	IonCol
} from "@ionic/react";
import { add } from "ionicons/icons";

const Tab2: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Post A Tool</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonGrid className='ion-no-padding' style={{ height: "100%" }}>
					<IonRow
						className='ion-justify-content-center ion-align-items-center'
						style={{ height: "100%" }}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								flexDirection: "column"
							}}
						>
							<IonIcon icon={add} size='large' />
							<h2>Start by adding a photo</h2>
						</div>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Tab2;
