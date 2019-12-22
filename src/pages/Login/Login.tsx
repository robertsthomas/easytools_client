import React, { useState } from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText, IonInput, IonItem, IonLabel, IonButton, IonNote, IonSpinner } from '@ionic/react';
import './login.css';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/userActions'

interface Props extends RouteComponentProps<any> {
    loginUser: Function;
    UI: any;
}

const Login: React.FC<Props> = ({ loginUser, history, UI: { loading } }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState()

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password
        }

        loginUser(userData, history);
    }

    return (
        <IonPage>
            <IonContent>
                <IonGrid className="form">
                    <IonRow>
                        <IonCol sizeSm="true">
                            <IonText>
                                <h2 className="pageTitle">
                                    Login
                                </h2>
                            </IonText>
                            <form noValidate onSubmit={handleSubmit}>
                                <IonItem>
                                    <IonLabel>Email</IonLabel>
                                    <IonInput id="email" name="email" type="email" className="textField"
                                        value={email} onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>Password</IonLabel>
                                    <IonInput id="password" name="password" type="password" className="textField"
                                        value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                                </IonItem>
                                <IonButton disabled={loading ? true : false} expand="full" type="submit" className="button">{loading ? <IonSpinner name="crescent" /> : 'Login'}</IonButton>
                                <small>Dont have an account? Sign up <Link to='/signup'>here</Link></small>
                            </form>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

const mapStateToProps = (state: any) => ({
    user: state.user,
    UI: state.UI
})

const mapActionsToProps = {
    loginUser
}


export default connect(mapStateToProps, mapActionsToProps)(Login);