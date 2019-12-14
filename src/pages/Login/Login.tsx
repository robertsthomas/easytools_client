import React, { useState } from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText, IonInput, IonItem, IonLabel, IonButton, IonNote, IonSpinner } from '@ionic/react';
import axios from 'axios';
import './login.css';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

interface Props extends RouteComponentProps<any> {
    handleSubmit: () => any;
}

const Login: React.FC<Props> = ({ history }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState()

    const handleChange = (e: any) => {
        console.log(e.target.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setLoading(true)

        const userData = {
            email: email,
            password: password
        }
        console.log(userData)
        axios.post('/login', userData)
            .then(res => {
                console.log(res.data)
                setLoading(false)
                history.push('/');
            })
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data)
                setLoading(false)
            })
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
                                {/* <small>Dont have an account? Sign up <Link to='/signup'>here</Link></small> */}
                            </form>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default Login;