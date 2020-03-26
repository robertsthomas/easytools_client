import {
  SET_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_AUTHENTICATED,
  SET_UNAUTHENTECATED,
  LOADING_USER
} from "../types";

const initState = {
  authenticated: false,
  tutorialComplete: false,
  loading: false,
  credentials: {},
  tools: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };

    case SET_UNAUTHENTECATED:
      return initState;

    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        tools: [...action.payload.tools],
        ...action.payload
      };

    case LOADING_USER:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
