import { CoffeeCard } from "../CoffeeCard";

import { CoffeeList, CoffeeMenuContainer } from "./styles";

export function CoffeeMenu() {
  return (
    <CoffeeMenuContainer>
      <h2>Nossos cafés</h2>
      <CoffeeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeeList>
    </CoffeeMenuContainer>
  )
}