import { Action } from "@ngrx/store";
import { NavigationExtras } from '@angular/router';
import { query } from '@angular/core/src/animation/dsl';

export const GO = '[Router] Go';
export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';

export class Go implements Action {
  readonly type = GO;
  constructor(
    public payload: {
      path: any[],
      query?: {},
      extras?: NavigationExtras
    }
  ) {}
}
export class Back implements Action {
  readonly type = BACK;
}
export class Forward implements Action {
  readonly type = FORWARD;
}

export type Actions = Go | Back | Forward;