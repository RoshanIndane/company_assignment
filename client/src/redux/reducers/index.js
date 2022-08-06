import changeNum from "./addSub";
import {combineReducers} from "redux";

 export const rootReducer= combineReducers({
    changeNum:changeNum
})

