import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
// import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";
import toolsReducer from "./reducers/toolsReducer";

const initState = {};
const middleWare = [thunk];

const reducers = combineReducers({
  user: userReducer,
  // data: dataReducer,
  UI: uiReducer,
  tools: toolsReducer
});

const store = createStore(
  reducers,
  initState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
