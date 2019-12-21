import React, { useState } from 'react'
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText, IonItem, IonLabel, IonInput, IonButton, IonSpinner } from '@ionic/react'

import axios from 'axios';
import { RouteComponentProps } from 'react-router';

import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/userActions';

interface Props extends RouteComponentProps<any> {
    signupUser: Function;
    UI: any
}

const Signup: React.FC<Props> = ({ signupUser, history, UI: { loading } }) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [user, setUser] = useState()
    const [errors, setErrors] = useState()

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newUserData = {
            email,
            password,
            confirmPassword,
            user
        }
        console.log(newUserData)

        signupUser(newUserData, history)
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

const mapStateToProps = (state: any) => ({
    user: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, { signupUser })(Signup);