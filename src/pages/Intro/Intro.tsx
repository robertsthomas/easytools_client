import React from "react";
import "./intro.css";
import {
	IonPage,
	IonContent,
	IonSlide,
	IonSlides,
	IonButton
} from "@ionic/react";

const Intro: React.FC<{}> = () => {
	return (
		<IonPage>
			<IonContent>
				<IonSlides>
					<IonSlide>
						<p>Slide one</p>
					</IonSlide>
					<IonSlide>
						<p>Slide Two</p>
					</IonSlide>
					<IonSlide>
						<p>Slide Three</p>
					</IonSlide>
				</IonSlides>
			</IonContent>
		</IonPage>
	);
};

export default Intro;
