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
	IonButton,
	IonThumbnail,
	IonList
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import "./style/style.css";

const PostTool: React.FC = () => {
	const swiperRef = useRef<HTMLIonSlidesElement>(null);
	const [preview, setPreview] = useState();

	useEffect(() => {}, []);

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
			if (swiperRef != null && swiperRef.current != null) {
				swiperRef.current.slideNext().then(() => {
					setPreview(reader.result);
				});
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
				<IonSlides className='post-slides swiper-no-swiping' ref={swiperRef}>
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
					<IonSlide id='slide2'>
						<IonGrid>
							<IonRow>
								<IonThumbnail>
									{preview ? <img id='mlimg' src={preview} /> : <img src='' />}
								</IonThumbnail>
							</IonRow>
							<IonRow>
								<form>
									<IonList>
										<IonItem>
											<IonLabel position='stacked'>Title</IonLabel>
											<IonInput></IonInput>
										</IonItem>
										<IonItem>
											<IonLabel position='stacked'>Title</IonLabel>
											<IonInput></IonInput>
										</IonItem>
										<IonItem>
											<IonLabel position='stacked'>Title</IonLabel>
											<IonInput></IonInput>
										</IonItem>
									</IonList>
								</form>
							</IonRow>
						</IonGrid>
					</IonSlide>
					{/* END Photo ML details and post info */}
				</IonSlides>
			</IonContent>
		</IonPage>
	);
};

export default PostTool;
