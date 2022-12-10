import { CoffeeQuantityButton } from "../../../../components/CoffeeQuantityButton";

import { Trash } from "phosphor-react";
import { BoughtCoffeeCardContainer, BoughtCoffeeContent } from "./styles";

import { convertCoffeePriceToString } from "../../../../functions/convertCoffeePriceToString";


export interface CoffeeCartCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface BoughtCoffeeCard {
  data: CoffeeCartCardProps
}

export function BoughtCoffeeCard({ data }: BoughtCoffeeCard) {
  const totalPriceOfCoffee = convertCoffeePriceToString(data.price, data.quantity)
  return (
    <BoughtCoffeeCardContainer>
      <BoughtCoffeeContent >
        <img src={data.image} alt={`Xícara de café ${data.name}`} />
        <div className="CoffeeData">
          <p>{data.name}</p>
          <div className="CoffeeButtons">
            <CoffeeQuantityButton quantity={data.quantity} />
            <button className="CoffeeRemove">
              <Trash size={18} color={'#8047F8'} />
              Remover
            </button>
          </div>
        </div>
      </BoughtCoffeeContent >
      <span className="CoffeePrice">R$ {totalPriceOfCoffee}</span>
    </BoughtCoffeeCardContainer>
  )
}