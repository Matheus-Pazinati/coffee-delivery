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

  }
  return state
}