import { SelectedCoffee } from "../../context/CoffeeContext";

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE_CART = 'REMOVE_COFFEE_CART',
  INCREMENT_COFFEE_QUANTITY = 'INCREMENT_COFFEE_QUANTITY',
  DECREMENT_COFFEE_QUANTITY = 'DECREMENT_COFFEE_QUANTITY'
}

export function addNewCoffeeOnCartAction(coffee: SelectedCoffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee
    }
  }
}

export function removeCoffeeFromCartAction({ id }: SelectedCoffee) {
  return {
    type: ActionTypes.REMOVE_COFFEE_CART,
    payload: {
      id
    }
  }
}

export function incrementCoffeeQuantityAction(id: string) {
  return {
    type: ActionTypes.INCREMENT_COFFEE_QUANTITY,
    payload: {
      id
    }
  }
}

export function decrementCoffeeQuantityAction({ id }: SelectedCoffee) {
  return {
    type: ActionTypes.DECREMENT_COFFEE_QUANTITY,
    payload: {
      id
    }
  }
}