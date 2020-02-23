import { LOADING_TOOLS, SET_TOOLS, POST_TOOL } from "../types";
import axios from "axios";

export const getTools = () => dispatch => {
	dispatch({ type: LOADING_TOOLS });
	axios
		.get("/tools")
		.then(res => {
			dispatch({
				type: SET_TOOLS,
				payload: res.data
			});
		})
		.catch(err => console.log(err));
};

// Post a Tool

export const postTool = newTool => dispatch => {
	// TODO: Load UI

	axios
		.post("/tools", newTool)
		.then(res => {
			dispatch({ type: POST_TOOL, payload: res.data });
			console.log(res.data);
		})
		.catch(err => {
			// TODO: dispatch errors
			console.log(err);
		});
};
