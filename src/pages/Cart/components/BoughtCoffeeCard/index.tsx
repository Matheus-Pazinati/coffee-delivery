import { CoffeeQuantityButton } from "../../../../components/CoffeeQuantityButton";

import { Trash } from "phosphor-react";
import { BoughtCoffeeCardContainer, BoughtCoffeeContent } from "./styles";

import { convertCoffeePriceToString } from "../../../../functions/convertCoffeePriceToString";

import { CoffeeQuantityChangeMethods } from "../../../Home/components/CoffeeCard";
import { useContext } from "react";
import { SelectedCoffeesContext } from "../../../../context/CoffeeContext";

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

  const { incrementCoffeeQuantity, decrementCoffeeQuantity } = useContext(SelectedCoffeesContext)

  function changeAmountOfCoffeesCart(type: CoffeeQuantityChangeMethods) {
    if (type === "increment") {
      return incrementCoffeeQuantity(data.id)
    }
    return decrementCoffeeQuantity(data.id)
  }
  return (
    <BoughtCoffeeCardContainer>
      <BoughtCoffeeContent >
        <img src={data.image} alt={`Xícara de café ${data.name}`} />
        <div className="CoffeeData">
          <p>{data.name}</p>
          <div className="CoffeeButtons">
            <CoffeeQuantityButton 
              quantity={data.quantity} 
              onQuantityChange={changeAmountOfCoffeesCart}
            />
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