import React, { useState } from "react";
import {
	IonPage,
	IonContent,
	IonGrid,
	IonRow,
	IonCol,
	IonText,
	IonInput,
	IonItem,
	IonLabel,
	IonButton,
	IonNote,
	IonSpinner,
	IonImg,
	IonModal
} from "@ionic/react";
import "./login.css";
import { RouteComponentProps, withRouter } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../img/Easy Tools.svg";

import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

interface Props extends RouteComponentProps<any> {
	loginUser: Function;
	UI: any;
}

const Login: React.FC<Props> = ({ loginUser, history, UI: { loading } }) => {
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
		errors: {}
	});

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const userData = {
			email: loginInfo.email,
			password: loginInfo.password
		};

		await loginUser(userData, history);
		history.push("/");
	};

	const handleChange = (e: any) => {
		setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
	};

	return (
		<IonPage>
			<IonContent>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						paddingTop: 10
					}}
				>
					<IonImg style={{ width: 200 }} src={logo} />
				</div>
				<IonGrid className='form'>
					<IonRow>
						<IonCol sizeSm='true'>
							<IonText>
								<h2 className='pageTitle'>Login</h2>
							</IonText>
							<form noValidate onSubmit={handleSubmit}>
								<IonItem>
									<IonLabel>Email</IonLabel>
									<IonInput
										style={{ "--background": "none" }}
										id='email'
										name='email'
										type='email'
										className='textField'
										value={loginInfo.email}
										onIonChange={handleChange}
									></IonInput>
								</IonItem>

								<IonItem>
									<IonLabel>Password</IonLabel>
									<IonInput
										id='password'
										name='password'
										type='password'
										className='textField'
										value={loginInfo.password}
										onInput={handleChange}
									></IonInput>
								</IonItem>
								<IonButton
									disabled={loading ? true : false}
									expand='full'
									type='submit'
									className='button'
								>
									{loading ? <IonSpinner name='crescent' /> : "Login"}
								</IonButton>
								<small>
									Dont have an account? Sign up <Link to='/signup'>here</Link>
								</small>
							</form>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

const mapStateToProps = (state: any) => ({
	user: state.user,
	UI: state.UI
});

const mapActionsToProps = {
	loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Login));
