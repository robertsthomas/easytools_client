import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import "./style/style.css";
import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";
import { postTool } from "../../redux/actions/toolActions";

interface Props {
	UI: any;
	postTool: any;
}

const PostTool: React.FC<Props> = ({ UI: { loading }, postTool }) => {
	let history = useHistory();
	const [preview, setPreview] = useState("");
	const [slide, setSlide] = useState(1);

	const [toolValues, setToolValues] = useState({
		name: "",
		preview
	});

	useEffect(() => {}, []);

	const handleToolChange = (e: any) => {
		console.log(toolValues);
		setToolValues({ ...toolValues, [e.target.name]: e.target.value });
		console.log([e.target.name], e.target.value);
	};

	const handleToolSubmit = async (e: any) => {
		e.preventDefault();
		console.log(preview);
		await postTool(toolValues);
		history.push("/");
	};

	const nextSlide = () => {
		setSlide(slide + 1);
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Post A Tool</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<div className='post-tool'>
					{(() => {
						switch (slide) {
							case 1:
								return (
									<Slide1
										handleToolChange={handleToolChange}
										setPreview={setPreview}
										nextSlide={nextSlide}
									/>
								);

							case 2:
								return (
									<Slide2
										handleToolSubmit={handleToolSubmit}
										handleToolChange={handleToolChange}
										preview={preview}
									/>
								);
						}
					})()}
				</div>
			</IonContent>
		</IonPage>
	);
};

const mapStateToProps = (state: any) => ({
	UI: state.UI
});

export default connect(mapStateToProps, { postTool })(PostTool);
