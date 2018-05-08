import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromServices from '../../services';

import * as pizzasActions from  '../actions/pizzas.action';

@Injectable()
export class PizzasEffects {
  constructor(
    private $actions: Actions,
    private pizzasService: fromServices.PizzasService
  ) {}

  @Effect()
  $loadPizzas = this.$actions.ofType(pizzasActions.LOAD_PIZZAS)
    .pipe(
      switchMap(() => {
        return this.pizzasService
          .getPizzas()
          .pipe(
            map(pizzas => new pizzasActions.LoadPizzasSuccess(pizzas)),
            catchError(error => of(new pizzasActions.LoadPizzasFail(error)))
          )
      })
    )
}