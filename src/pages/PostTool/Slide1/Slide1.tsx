import React from "react";
import { IonGrid, IonRow, IonIcon, IonText } from "@ionic/react";
import { addCircle } from "ionicons/icons";
import "./styles/slide1.css";

interface Props {
	nextSlide: Function;
	setPreview: React.Dispatch<any>;
}

const Slide1: React.FC<Props> = ({ nextSlide, setPreview }) => {
	const handleUploadImage = () => {
		const fileInput: any = document.getElementById("tool-img-upload");
		fileInput.click();
	};

	const handleImageChange = (event: any) => {
		event.preventDefault();

		let reader = new FileReader();
		let image = event.target.files[0];

		reader.readAsDataURL(image);
		reader.onloadend = async () => {
			await setPreview(reader.result);
			await nextSlide();
		};
	};

	return (
		<IonGrid id='slide1'>
			<IonRow>
				<div className='upload' onClick={handleUploadImage}>
					<IonIcon icon={addCircle} className='ion-padding-bottom' />

					<IonText>Start by adding a photo</IonText>
					<input
						type='file'
						id='tool-img-upload'
						hidden={true}
						onChange={handleImageChange}
					/>
				</div>
			</IonRow>
		</IonGrid>
	);
};

export default Slide1;
