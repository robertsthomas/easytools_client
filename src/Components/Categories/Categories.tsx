import React from "react";
import { IonCard, IonCardContent, IonGrid, IonRow, IonCol } from "@ionic/react";
const img = require("../../img/saw.jpg");

type Props = {
	children: any;
};

const Category: any = ({ children }: Props) => {
	return (
		<IonCol size='6'>
			<IonCard
				style={{
					width: "100%",
					padding: 0,
					margin: 0,
					height: 180,
					backgroundImage: `url(${img})`,
					backgroundSize: "cover"
				}}
			>
				<IonCardContent
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%"
					}}
				>
					<p
						style={{
							backgroundColor: "black",
							color: "white",
							fontWeight: 700,
							fontSize: 23
						}}
					>
						{children}
					</p>
				</IonCardContent>
			</IonCard>
		</IonCol>
	);
};

const Categories: React.FC = () => {
	const categories = [
		"Power Tools",
		"Hand Tools",
		"Electrical",
		"Storage",
		"Automotive",
		"Landscaping"
	];

	return (
		<IonGrid>
			<IonRow>
				{categories.map((category: string, idx: number) => (
					<Category key={idx}>{category}</Category>
				))}
			</IonRow>
		</IonGrid>
	);
};

export default Categories;
