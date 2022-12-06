import { useEffect, useState } from "react";
import { CoffeeCard } from "../CoffeeCard";

import { CoffeeItems, CoffeeMenuContainer } from "./styles";

export interface CoffeeCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
  price: number
}

export function CoffeeMenu() {
  const url = "https://my-json-server.typicode.com/Matheus-Pazinati/coffee-delivery-json-db/coffee";

  const [coffee, setCoffee] = useState<CoffeeCardProps[]>([])

  useEffect(() => {
    async function fetchCoffeMenuData() {
      const response = await fetch(url)
      const jsonResponse = await response.json() as CoffeeCardProps[]
      setCoffee(jsonResponse)
    }

    fetchCoffeMenuData()
  }, [])

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