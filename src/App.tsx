// TODO:
// Switch tutorialComplete from Storage to Redux

import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { apps, person, home } from "ionicons/icons";

import jwtDecode from "jwt-decode";
import axios from "axios";

import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

import AuthRoute from "./util/AuthRoute";
import Home from "./pages/Home/Home";
import Tab2 from "./pages/Tab2";
import Details from "./pages/Details";

import { Plugins } from "@capacitor/core";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import Intro from "./pages/Intro/Intro";
// import IntroRoute from "./util/IntroRoute";

const { Storage } = Plugins;

const token = localStorage.FBIdToken;
if (token) {
	const decodedToken: any = jwtDecode(token);
	if (decodedToken.exp * 1000 < Date.now()) {
		store.dispatch(logoutUser());
		window.location.href = "/login";
	} else {
		store.dispatch({ type: SET_AUTHENTICATED });
		axios.defaults.headers.common["Authorization"] = token;
		store.dispatch(getUserData());
	}
}

const App: React.FC = () => {
	const [tutorialComplete, setTutComplete] = useState(false);

	useEffect(() => {
		(async () => {
			const ret = await Storage.get({ key: "tutorialComplete" });
			const complete = ret.value && JSON.parse(ret.value);
			console.log("tutorial complete:", complete);

			if (complete) {
				setTutComplete(complete);
			}
		})();
	}, []);

	return (
		<Provider store={store}>
			<IonApp>
				<IonReactRouter>
					{!tutorialComplete ? (
						<IonRouterOutlet>
							<Route exact path='/home' render={() => <Redirect to='/' />} />
							<Route exact path='/'>
								<Intro />
							</Route>
						</IonRouterOutlet>
					) : (
						<IonTabs>
							<IonRouterOutlet>
								<AuthRoute exact path='/login' component={Login} />
								<AuthRoute exact path='/signup' component={Signup} />

								<Route path='/tab2' component={Tab2} />
								<Route path='/tab2/details' component={Details} />
								<AuthRoute path='/profile' component={Profile} />

								<Route path='/intro' component={Intro} />

								<Route exact path='/' render={() => <Redirect to='/home' />} />
								<Route exact path='/home' component={Home} />
							</IonRouterOutlet>

							<IonTabBar slot='bottom'>
								<IonTabButton tab='tab1' href='/home'>
									<IonIcon icon={home} />
									<IonLabel>Home</IonLabel>
								</IonTabButton>
								<IonTabButton tab='tab2' href='/tab2'>
									<IonIcon icon={apps} />
									<IonLabel>Tab Two</IonLabel>
								</IonTabButton>
								<IonTabButton tab='profile' href='/profile'>
									<IonIcon icon={person} />
									<IonLabel>Profile</IonLabel>
								</IonTabButton>
							</IonTabBar>
						</IonTabs>
					)}
				</IonReactRouter>
			</IonApp>
		</Provider>
	);
};

export default App;
