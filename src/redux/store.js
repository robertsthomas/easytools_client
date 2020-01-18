import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
// import dataReducer from './reducers/dataReducer';
import uiReducer from "./reducers/uiReducer";
<<<<<<< HEAD
import toolsReducer from "./reducers/toolsReducer";
=======
>>>>>>> e9ac60b9c0936a62140e3fbd5bdfffde273a06e6

const initState = {};
const middleWare = [thunk];

const reducers = combineReducers({
<<<<<<< HEAD
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
=======
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
>>>>>>> e9ac60b9c0936a62140e3fbd5bdfffde273a06e6
);

export default store;
