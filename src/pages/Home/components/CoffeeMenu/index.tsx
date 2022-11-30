import { CoffeeCard } from "../CoffeeCard";

import { CoffeeItems, CoffeeMenuContainer } from "./styles";

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      <h2>Nossos cafés</h2>
      <CoffeeItems>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeItems>
    </CoffeeMenuContainer>
  )
}