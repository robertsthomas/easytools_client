import { LOADING_TOOLS } from "../types";

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
    default:
      return state;
  }
}
