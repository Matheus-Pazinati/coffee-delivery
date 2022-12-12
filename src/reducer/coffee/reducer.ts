import produce from "immer";
import { SelectedCoffee } from "../../context/CoffeeContext";

import { ActionTypes } from "./actions";

export function coffeesReducer(state: SelectedCoffee[], action: any) {

  const coffeeOnCartIndex = state.findIndex((coffee) => {
    return coffee.id === action.payload.id
  })

  switch(action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {

      const coffeeIndexInTheCart = state.findIndex((coffee) => {
        return coffee.id === action.payload.coffee.id
      })
      const coffeeIsInTheCart = coffeeIndexInTheCart >= 0

      return produce(state, (draft) => {
        if (coffeeIsInTheCart) {
          draft[coffeeIndexInTheCart].quantity += 1
          
        } else {
            draft.push(action.payload.coffee)
          }
      })
    }

    case ActionTypes.INCREMENT_COFFEE_QUANTITY: {
      return produce(state, (draft) => {
        if (coffeeOnCartIndex < 0) {
          return state
        }
        draft[coffeeOnCartIndex].quantity += 1;
      })
    }

    case ActionTypes.DECREMENT_COFFEE_QUANTITY: {
      return produce(state, (draft) => {
        if (coffeeOnCartIndex < 0) {
          return state
        }
        draft[coffeeOnCartIndex].quantity -= 1;
      })
    }

    case ActionTypes.REMOVE_COFFEE_CART: {
      return produce(state, (draft) => {
        if (coffeeOnCartIndex < 0) {
          return state
        }
        draft.splice(coffeeOnCartIndex, 1)
      })
    }
  }
  return state
}