import { LOADING_TOOLS, SET_TOOLS, POST_TOOL } from "../types";

const initState = {
	loadingTools: false,
	tools: []
};

export default function(state = initState, action) {
	switch (action.type) {
		case LOADING_TOOLS:
			return {
				...state,
				loadingTools: true
			};

		case SET_TOOLS:
			return {
				...state,
				loadingTools: false,
				tools: [...action.payload]
			};

		case POST_TOOL:
			return {
				...state,
				tools: [action.payload, ...state.tools]
			};
		default:
			return state;
	}
}
