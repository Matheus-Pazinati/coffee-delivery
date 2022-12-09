import { useContext } from "react";
import { SelectedCoffeesContext } from "../../context/CoffeeContext";

import { CartContainer } from "./styles";

import { AdressForm } from "./components/AdressForm";
import { CoffeeList } from "./components/CoffeeList";
import { EmptyCart } from "./components/EmptyCart";

export function Cart() {
  const { selectedCoffees } = useContext(SelectedCoffeesContext)
  return (
    <div>
      {selectedCoffees.length > 0 ? 
        <CartContainer>
          <AdressForm />
          <CoffeeList />
        </CartContainer> 
        : 
        <CartContainer>
          <EmptyCart />
        </CartContainer>
      }  
    </div>
  )
}