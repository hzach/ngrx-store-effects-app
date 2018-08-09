import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
};

// creates a selector for the entire lazy loaded module. creates a base reference to the entire feature
// state, which we are calling products.
export const getProductsState = createFeatureSelector<ProductsState>(
    'products'
);

// createSelector lets us define a selectors that let us get pieces of the state
// tree down a level of the feature state selector. This selector accesses the pizzas
// in the product feature state.
export const getPizzaState = createSelector(
    getProductsState,
    (state: ProductsState) => state.pizzas
);

export const getAllPizzas        = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getAllPizzasLoaded  = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
