import { useState, useContext } from "react";

import { ShoppingCartSimple } from "phosphor-react";
import { CoffeeQuantityButton } from "../../../../components/CoffeeQuantityButton";
import { CoffeeCardBuy, CoffeeCardCartButton, CoffeeCardContainer} from "./styles";

import { SelectedCoffee, SelectedCoffeesContext } from "../../../../context/CoffeeContext";

import { CoffeeProps } from '../CoffeeMenu/index'

interface CoffeeCardProps {
  data: CoffeeProps
}

export type CoffeeQuantityChangeMethods = 'increment' | 'decrement';

export function CoffeeCard({data}: CoffeeCardProps) {

  const { addNewCoffeeOnCart } = useContext(SelectedCoffeesContext)

  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function changeCoffeeQuantity(type: CoffeeQuantityChangeMethods) {
    if (type === "increment") {
      return setCoffeeQuantity((state) => state + 1)
    }

    return setCoffeeQuantity((state) => state - 1)
  }

  const coffeeTotalPrice = data.price * coffeeQuantity
  const coffeePriceView = coffeeTotalPrice.toFixed(1).replace('.', ',').concat('0')

  const coffeeSelected: SelectedCoffee = {
    id: data.id,
    image: data.image,
    price: coffeeTotalPrice,
    name: data.name,
    quantity: coffeeQuantity
  }

  return (
    <CoffeeCardContainer>
      <img src={data.image} alt={`Xícara contendo o café ${data.name}`} />
      <div className="CoffeeTagsContainer">
       {data.tags.map((tag, index) => {
        return (
          <label key={index}>{tag}</label>
        )
       })}
      </div>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <CoffeeCardBuy>
        <p className="CoffeePrice">R$ <span>{coffeePriceView}</span></p>
        <CoffeeQuantityButton quantity={coffeeQuantity} onQuantityChange={changeCoffeeQuantity} />
        <CoffeeCardCartButton onClick={() => {
          addNewCoffeeOnCart(coffeeSelected)
        }}>
          <ShoppingCartSimple size={22} weight={'fill'} color='#FAFAFA' />
        </CoffeeCardCartButton>
      </CoffeeCardBuy>
    </CoffeeCardContainer>
  )
}