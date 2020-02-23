import React from "react";
import { IonSlides, IonSlide, IonCard, IonCardContent } from "@ionic/react";

const SlideCard = ({ children }) => {
	return (
		<IonSlide>
			<IonCard style={{ width: "70%" }}>
				<IonCardContent>{children}</IonCardContent>
			</IonCard>
		</IonSlide>
	);
};

const HomeCards = () => {
	return (
		<React.Fragment>
			<IonSlides
				options={{
					slidesPerGroupSkip: 2,
					spaceBetween: -70
				}}
			>
				<SlideCard>card One</SlideCard>
				<SlideCard>card two</SlideCard>
			</IonSlides>
		</React.Fragment>
	);
};

export default HomeCards;
