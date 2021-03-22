import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducer/index";
import { forbiddenWordsMiddleWare } from "../middleware/index";
import thunk from "redux-thunk";

const store= createStore(rootReducer,
     composeWithDevTools(applyMiddleware(forbiddenWordsMiddleWare, thunk)))

export default store;