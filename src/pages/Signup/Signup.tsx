import React, { useState } from 'react'
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText, IonItem, IonLabel, IonInput, IonButton, IonSpinner } from '@ionic/react'

import axios from 'axios';
import { RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps<any> {

}

const Signup: React.FC<Props> = ({ history }) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState()

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setLoading(true)

        const newUserData = {
            email,
            password,
            confirmPassword,
            user
        }
        console.log(newUserData)
        axios.post('/signup', newUserData)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`)
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
                                    Signup
                                </h2>
                            </IonText>
                            <form noValidate onSubmit={handleSubmit}>
                                <IonItem>
                                    <IonLabel>Email</IonLabel>
                                    <IonInput id="email" name="email" type="email" className="textField"
                                        value={email} onIonChange={(e: any) => setEmail(e.target.value)}>
                                    </IonInput>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>User</IonLabel>
                                    <IonInput id="user" name="user" type="text" className="textField"
                                        value={user} onIonChange={(e: any) => setUser(e.target.value)}>
                                    </IonInput>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>Password</IonLabel>
                                    <IonInput id="password" name="password" type="password" className="textField"
                                        value={password} onIonChange={(e: any) => setPassword(e.target.value)}>
                                    </IonInput>
                                </IonItem>

                                <IonItem>
                                    <IonLabel>Confirm Password</IonLabel>
                                    <IonInput id="confirmPassword" name="confirmPassword" type="password" className="textField"
                                        value={confirmPassword} onIonChange={(e: any) => setConfirmPassword(e.target.value)}>
                                    </IonInput>
                                </IonItem>
                                
                                <IonButton disabled={loading ? true : false} expand="full" type="submit" className="button">{loading ? <IonSpinner name="crescent" /> : 'Signup'}</IonButton>
                                {/* <small>Dont have an account? Sign up <Link to='/signup'>here</Link></small> */}
                            </form>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )

}

export default Signup;