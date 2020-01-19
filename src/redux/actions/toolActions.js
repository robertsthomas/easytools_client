import { LOADING_TOOLS, SET_TOOLS } from "../types";
import axios from "axios";

export const getTools = () => dispatch => {
	dispatch({ type: LOADING_TOOLS });
	axios
		.get("/tools")
		.then(res => {
			setTimeout(() => {
				dispatch({
					type: SET_TOOLS,
					payload: res.data
				});
			}, 2000);
		})
		.catch(err => console.log(err));
};
