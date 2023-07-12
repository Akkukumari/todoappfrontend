import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as taskReducer} from "./TaskReducer/reducer";
import {reducer as editReducer} from "./EditReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({
 taskReducer,
 editReducer,
 authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

