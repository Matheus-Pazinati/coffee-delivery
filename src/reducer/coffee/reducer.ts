import produce from "immer";
import { SelectedCoffee } from "../../context/CoffeeContext";

import { ActionTypes } from "./actions";

export function coffeesReducer(state: SelectedCoffee[], action: any) {
  switch(action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {

      const coffeeOnCartIndex = state.findIndex((coffee) => {
        return coffee.id === action.payload.coffee.id
      })
      const coffeeIsInTheCart = coffeeOnCartIndex >= 0

      return produce(state, (draft) => {
        if (coffeeIsInTheCart) {
          draft[coffeeOnCartIndex].quantity += 1
          
        } else {
            draft.push(action.payload.coffee)
          }
      })
    }

    case ActionTypes.INCREMENT_COFFEE_QUANTITY: {
      const coffeeOnCartIndex = state.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })

      return produce(state, (draft) => {
        if (coffeeOnCartIndex < 0) {
          return state
        }
        draft[coffeeOnCartIndex].quantity += 1;
      })
    }

    case ActionTypes.DECREMENT_COFFEE_QUANTITY: {
      const coffeeOnCartIndex = state.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })

      return produce(state, (draft) => {
        if (coffeeOnCartIndex < 0) {
          return state
        }
        draft[coffeeOnCartIndex].quantity -= 1;
      })
    }
  }
  return state
}