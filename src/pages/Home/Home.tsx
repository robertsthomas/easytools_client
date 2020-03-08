import React from "react";

import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonRefresher,
	IonRefresherContent,
	IonChip,
	IonLabel,
	IonSearchbar,
	IonSlides,
	IonSlide,
	IonText,
	IonIcon,
	IonGrid,
	IonRow
} from "@ionic/react";
// import { book, build, colorFill, grid } from "ionicons/icons";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import "./styles/home.css";

// import Tools from "../../Components/Tools/Tools";
import HomeCards from "../../Components/HomeCards/HomeCards";
import { person } from "ionicons/icons";
import Tools from "../../Components/Tools/Tools";

const Home: React.FC = () => {
	const doRefresh = (event: any) => {
		console.log("Begin async operation");

		setTimeout(() => {
			console.log("Async operation has ended");
			event.detail.complete();
		}, 2000);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonGrid>
						<IonRow className='ion-justify-content-center'>
							<IonText>Easy Tools</IonText>
							<IonIcon icon={person} />
						</IonRow>
						<IonRow>
							<IonSearchbar
								mode='ios'
								style={{ paddingTop: 15 }}
							></IonSearchbar>
						</IonRow>
					</IonGrid>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonRefresher slot='fixed' onIonRefresh={doRefresh}>
					<IonRefresherContent></IonRefresherContent>
				</IonRefresher>

				<HomeCards />
				<Tools />
			</IonContent>
		</IonPage>
	);
};

const mapStateToProps = (state: any) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Home);
