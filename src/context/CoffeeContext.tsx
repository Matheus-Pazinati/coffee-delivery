import { createContext, ReactNode, useReducer } from 'react'
import { addNewCoffeeOnCartAction, incrementCoffeeQuantityAction } from '../reducer/coffee/actions';
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
  // removeCoffeeFromCart: (id: string) => void;
  incrementCoffeeQuantity: (id: string) => void;
  // decrementCoffeeQuantity: (id: string) => void;
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
  return (
    <SelectedCoffeesContext.Provider value={{
      selectedCoffees,
      addNewCoffeeOnCart,
      incrementCoffeeQuantity
    }}>
      {children}
    </SelectedCoffeesContext.Provider>
  )
}