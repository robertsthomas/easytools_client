import {
	SET_USER,
	LOADING_UI,
	SET_AUTHENTICATED,
	LOADING_USER
} from "../types";
import axios from "axios";

export const loginUser = (userData, history) => dispatch => {
	dispatch({ type: LOADING_UI });

	axios
		.post("/login", userData)
		.then(res => {
			setAuthorizationHeader(res.data.token);
			dispatch(getUserData());
			history.push("/");
		})
		.catch(err => {
			console.log(err.response.data);
		});
};

export const signupUser = (newUserData, history) => dispatch => {
	dispatch({ type: LOADING_UI });

	axios
		.post("/signup", newUserData)
		.then(res => {
			setAuthorizationHeader(res.data.token);
			dispatch(getUserData());
			history.push("/");
		})
		.catch(err => {
			console.log(err.response.data);
		});
};

export const logoutUser = () => dispatch => {
	localStorage.removeItem("FBIdToken");
	delete axios.defaults.headers.common["Authorization"];
	dispatch({ type: SET_AUTHENTICATED });
};

export const getUserData = () => dispatch => {
	dispatch({ type: LOADING_USER });
	axios
		.get("/user")
		.then(res => {
			dispatch({
				type: SET_USER,
				payload: res.data
			});
		})
		.catch(err => console.log(err));
};

export const uploadImage = formData => dispatch => {
	dispatch({ type: LOADING_USER });
	axios
		.post("/user/image", formData)
		.then(res => {
			dispatch(getUserData());
		})
		.catch(err => {
			console.log(err);
		});
};

const setAuthorizationHeader = token => {
	const FBIdToken = `Bearer ${token}`;
	localStorage.setItem("FBIdToken", FBIdToken);
	axios.defaults.headers.common["Authorization"] = FBIdToken;
};