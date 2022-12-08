import produce from "immer";
import { SelectedCoffee } from "../../context/CoffeeContext";

import { ActionTypes } from "./actions";

export function coffeesReducer(state: SelectedCoffee[], action: any) {
  switch(action.type) {
    case ActionTypes.ADD_NEW_COFFEE: 
      return produce(state, (draft) => {
        draft.push(action.payload)
      })
  }
  return state
}