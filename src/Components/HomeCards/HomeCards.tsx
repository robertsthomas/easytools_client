import React from "react";
import { IonSlides, IonSlide, IonCard, IonCardContent } from "@ionic/react";

type Props = {
	children: any;
};

const SlideCard: any = ({ children }: Props) => {
	return (
		<IonSlide>
			<IonCard
				style={{
					width: "72%",
					height: 140,
					margin: "10px 0",
					background: "#c4c4c4",
					boxShadow: "none",
					borderRadius: 4
				}}
			>
				<IonCardContent>{children}</IonCardContent>
			</IonCard>
		</IonSlide>
	);
};

const HomeCards: React.FC = () => {
	return (
		<React.Fragment>
			<IonSlides
				options={{
					slidesPerGroupSkip: 2,
					spaceBetween: -80
				}}
			>
				<SlideCard>card One</SlideCard>
				<SlideCard>card two</SlideCard>
				<SlideCard>card three</SlideCard>
			</IonSlides>
		</React.Fragment>
	);
};

export default HomeCards;
