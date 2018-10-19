import * as GeneralActions from "./general.actions";
import {IGeneralState} from "./general.models";


export const initialState: IGeneralState = {
  expandSidebar: false,
  exampleData: [],
  loading: false,
  error: null
};

export function reducer(state: IGeneralState = initialState, action: GeneralActions.Actions): IGeneralState {
  switch (action.type) {
    case GeneralActions.ActionTypes.TOGGLE_SIDEBAR:
      return { ...state, expandSidebar: !state.expandSidebar };
    case GeneralActions.ActionTypes.EXAMPLE_ACTION:
      return state;
    case GeneralActions.ActionTypes.EXAMPLE_ACTION_SUCCESS:
      return {...state, exampleData: action.payload};
    default:
      return state;
  }
}

// selectors
export const getExpandSidebar = (state: IGeneralState) => state.expandSidebar;
