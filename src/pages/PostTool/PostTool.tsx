import React, { useEffect, useState, useRef } from "react";
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
	IonCol,
	IonText,
	IonSlides,
	IonSlide,
	IonImg,
	IonButton
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import "./style/style.css";

declare var ml5: any;

const PostTool: React.FC = () => {
	const swiperRef = useRef<HTMLIonSlidesElement>(null);
	const [preview, setPreview] = useState();

	useEffect(() => {
		if (swiperRef && swiperRef.current)
			swiperRef.current.isEnd().then(console.log);
	}, []);

	// Add image to view on upload

	const handleUploadImage = () => {
		const fileInput: any = document.getElementById("tool-img-upload");
		fileInput.click();
	};

	const handleImageChange = (event: any) => {
		event.preventDefault();

		let reader = new FileReader();
		let image = event.target.files[0];

		reader.onloadend = () => {
			setPreview(reader.result);

			if (swiperRef != null && swiperRef.current != null) {
				swiperRef.current.slideNext();
			}
		};

		reader.readAsDataURL(image);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Post A Tool</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonSlides className='post-slides' ref={swiperRef}>
					{/* SLIDE 1: Add Photo Slide */}
					<IonSlide>
						<IonGrid className='ion-no-padding' style={{ height: "100%" }}>
							<IonRow
								className='ion-justify-content-center ion-align-items-center'
								style={{ height: "100%" }}
							>
								<div
									onClick={handleUploadImage}
									style={{
										display: "flex",
										alignItems: "center",
										flexDirection: "column"
									}}
								>
									<IonIcon
										icon={addCircle}
										className='ion-padding-bottom ico'
									/>

									<IonText className='add-photo-text'>
										Start by adding a photo
									</IonText>
									<input
										type='file'
										id='tool-img-upload'
										hidden={true}
										onChange={handleImageChange}
									/>
								</div>
							</IonRow>
						</IonGrid>
					</IonSlide>
					{/* End Add Photo Slide */}

					{/* SLIDE 2: Photo ML details and post info */}
					<IonSlide>{preview && <img src={preview} />}</IonSlide>
					{/* END Photo ML details and post info */}
				</IonSlides>
			</IonContent>
		</IonPage>
	);
};

export default PostTool;
