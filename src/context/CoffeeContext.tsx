import { createContext, ReactNode, useReducer } from 'react'
import { 
  addNewCoffeeOnCartAction, 
  clearCoffeeCartAction, 
  decrementCoffeeQuantityAction, 
  incrementCoffeeQuantityAction, 
  removeCoffeeFromCartAction} from '../reducer/coffee/actions';

import { coffeesReducer } from '../reducer/coffee/reducer';

export interface SelectedCoffee {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

interface SelectedCoffeesContextProps {
  selectedCoffees: SelectedCoffee[];
  addNewCoffeeOnCart: (coffee: SelectedCoffee) => void;
  removeCoffeeFromCart: (id: string) => void;
  incrementCoffeeQuantity: (id: string) => void;
  decrementCoffeeQuantity: (id: string) => void;
  clearCoffeeCart: () => void;
  totalPriceOfCoffees: number;
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const SelectedCoffeesContext = createContext({} as SelectedCoffeesContextProps)

export function CoffeeContextProvider({children}: CoffeeContextProviderProps) {

  const [selectedCoffees, dispatch] = useReducer(coffeesReducer, [])

  function addNewCoffeeOnCart(coffee: SelectedCoffee) {
    dispatch(addNewCoffeeOnCartAction(coffee))
  }

  function incrementCoffeeQuantity(id: string) {
    dispatch(incrementCoffeeQuantityAction(id))
  }

  function decrementCoffeeQuantity(id: string) {
    dispatch(decrementCoffeeQuantityAction(id))
  }

  function removeCoffeeFromCart(id: string) {
    dispatch(removeCoffeeFromCartAction(id))
  }

  function clearCoffeeCart(id?: string) {
    dispatch(clearCoffeeCartAction(id))
  }

  const coffeesPrices = selectedCoffees.map((coffee) => {
    return coffee.price * coffee.quantity
  })

  const totalPriceOfCoffees = coffeesPrices.reduce((total, current) => {
    return total + current
  }, 0)

  return (
    <SelectedCoffeesContext.Provider value={{
      selectedCoffees,
      addNewCoffeeOnCart,
      incrementCoffeeQuantity,
      decrementCoffeeQuantity,
      removeCoffeeFromCart,
      clearCoffeeCart,
      totalPriceOfCoffees
    }}>
      {children}
    </SelectedCoffeesContext.Provider>
  )
}