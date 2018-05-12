import { PizzasGuard } from './pizzas.guard';
import { PizzaExistsGuard } from './pizzas-exists.guard';
import { ToppingsGuard } from './toppings.guard';

export const guard: any = [PizzasGuard, PizzaExistsGuard, ToppingsGuard];

export * from './pizzas.guard';
export * from './pizzas-exists.guard';
export * from './toppings.guard';