import { CartContainer } from "./styles";

import { AdressForm } from "./components/AdressForm";
import { CoffeeList } from "./components/CoffeeList";
import { EmptyCard } from "./components/EmptyCard";

export function Cart() {
  return (
    <CartContainer>
      <AdressForm />
      <CoffeeList />
    </CartContainer>
  )
}