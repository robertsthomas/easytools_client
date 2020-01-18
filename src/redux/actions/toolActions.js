import { LOADING_TOOLS, SET_TOOLS } from "../types";
import axios from "axios";

export const getTools = () => dispatch => {
  axios
    .get("/tools")
    .then(res => {
      console.log(res);
      dispatch({
        type: SET_TOOLS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
