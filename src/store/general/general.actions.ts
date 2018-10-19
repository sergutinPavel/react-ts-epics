import {Action} from "redux";

export enum ActionTypes {
  TOGGLE_SIDEBAR = '[general] TOGGLE_SIDEBAR',
  EXAMPLE_ACTION = '[general] EXAMPLE_ACTION',
  EXAMPLE_ACTION_SUCCESS = '[general] EXAMPLE_ACTION_SUCCESS',
  EXAMPLE_ACTION_ERROR = '[general] EXAMPLE_ACTION_ERROR'
}

export class ToggleSidebarAction implements Action {
  public readonly type = ActionTypes.TOGGLE_SIDEBAR;
  constructor(public payload?: boolean) {}
}
export class ExampleAction implements Action {
  public type = ActionTypes.EXAMPLE_ACTION;
  constructor(public payload?: any) {}
}
export class ToggleSidebarSuccessAction implements Action {
  public readonly type = ActionTypes.EXAMPLE_ACTION_SUCCESS;
  constructor(public payload?: boolean) {}
}
export class ToggleSidebarFailAction implements Action {
  public readonly type = ActionTypes.EXAMPLE_ACTION_ERROR;
  constructor(public payload?: boolean) {}
}

export type Actions =
  ToggleSidebarAction
  | ToggleSidebarSuccessAction
  | ToggleSidebarFailAction
  | ExampleAction;
