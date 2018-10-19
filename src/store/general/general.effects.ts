import {Observable, of} from "rxjs/index";
import {mergeMap, catchError, map} from 'rxjs/operators';
import {combineEpics, ActionsObservable} from 'redux-observable';
import {Action} from 'redux';
import {IApplicationState} from "../root.reducer";
import * as GeneralActions from "./general.actions";


const exampleEffect = (action$: ActionsObservable<Action>, store: IApplicationState) =>
  action$.ofType(GeneralActions.ActionTypes.EXAMPLE_ACTION).pipe(
    mergeMap((action: GeneralActions.ToggleSidebarAction): Observable<any> => {
      // todo: any api call
      return of([1, 2, 3]).pipe(
        map(res => {
          return { type: GeneralActions.ActionTypes.EXAMPLE_ACTION_SUCCESS, payload: res }
        }),
        catchError(err => {
          return of({ type: GeneralActions.ActionTypes.EXAMPLE_ACTION_ERROR, payload: err });
        })
      )
    }),
  );

export const generalEffects = combineEpics(
  exampleEffect,
);
