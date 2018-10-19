import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {IGeneralState} from "./general/general.models";
import * as generalReducer from "./general/general.reducer";

export interface IApplicationState {
  readonly routing: any;
  readonly general: IGeneralState;
}

export default combineReducers<IApplicationState>({
  routing: routerReducer,
  general: generalReducer.reducer
});
