import { LOADING_TOOLS, SET_TOOLS } from "../types";

const initState = {
  loadingTools: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case LOADING_TOOLS:
      return {
        ...state,
        loading: true
      };
    case SET_TOOLS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
