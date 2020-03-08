import React, { useState } from "react";
import { IonContent, IonModal, IonButton } from "@ionic/react";
import Login from "../../pages/Login/Login";

interface Props {}

const LoginModel: React.FC<Props> = () => {
	return (
		<IonModal isOpen={true}>
			<Login />
		</IonModal>
	);
};

export default LoginModel;
