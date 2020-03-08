import React from "react";
import {
	IonGrid,
	IonRow,
	IonThumbnail,
	IonList,
	IonItem,
	IonLabel,
	IonInput,
	IonButton
} from "@ionic/react";

import "./styles/slide2.css";

interface Props {
	preview: any;
	handleToolSubmit: any;
	handleToolChange: any;
}

const Slide2: React.FC<Props> = ({
	preview,
	handleToolSubmit,
	handleToolChange
}) => {
	return (
		<IonGrid id='slide2'>
			<IonRow>
				<IonThumbnail>
					{preview ? (
						<img id='mlimg' src={preview} />
					) : (
						<img src='https://via.placeholder.com/150' />
					)}
				</IonThumbnail>
			</IonRow>
			<IonRow>
				<form>
					<IonList>
						<IonItem>
							<IonLabel position='stacked'>Tool Name</IonLabel>
							<IonInput
								name='name'
								type='text'
								placeholder='ex: Power Drill'
								onInput={handleToolChange}
							></IonInput>
						</IonItem>
					</IonList>
					<IonButton onClick={e => handleToolSubmit(e)}>Create</IonButton>
				</form>
			</IonRow>
		</IonGrid>
	);
};

export default Slide2;
