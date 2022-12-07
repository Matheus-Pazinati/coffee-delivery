import { useEffect, useState } from "react";
import { CoffeeCard } from "../CoffeeCard";

import { CoffeeItems, CoffeeMenuContainer } from "./styles";

export interface CoffeeProps {
  id: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
  price: number
}

export function CoffeeMenu() {
  const url = "https://my-json-server.typicode.com/Matheus-Pazinati/coffee-delivery-json-db/coffee";

  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  useEffect(() => {
    async function fetchCoffeMenuData() {
      const response = await fetch(url)
      const jsonResponse = await response.json() as CoffeeProps[]
      setCoffees(jsonResponse)
    }

    fetchCoffeMenuData()
  }, [])

  return (
    <CoffeeMenuContainer>
      <h2>Nossos cafés</h2>
      <CoffeeItems>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard key={coffee.id} data={coffee} />
          )
        })}
      </CoffeeItems>
    </CoffeeMenuContainer>
  )
}