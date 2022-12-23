import { useContext } from "react";
import { SelectedCoffeesContext } from "../../context/CoffeeContext";

import { CartContainer } from "./styles";

import { AdressForm } from "./components/AdressForm";
import { CoffeeList } from "./components/CoffeeList";
import { ComponentNotFound } from "../../components/ComponentNotFound";

import emptyCartImg from '../../assets/cd-empty-cart.png'

export function Cart() {
  const { selectedCoffees } = useContext(SelectedCoffeesContext)
  const hasCoffeeOnCart = selectedCoffees.length > 0
  return (
    <div>
      {hasCoffeeOnCart ? 
        <CartContainer>
          <AdressForm />
          <CoffeeList />
        </CartContainer> 
        : 
        <CartContainer>
          <ComponentNotFound 
          description="Seu carrinho ainda está vazio." 
          image={emptyCartImg}
          />
        </CartContainer>
      }  
    </div>
  )
}