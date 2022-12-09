import { useState, useContext } from "react";

import { ShoppingCartSimple } from "phosphor-react";
import { CoffeeQuantityButton } from "../../../../components/CoffeeQuantityButton";
import { CoffeeCardBuy, CoffeeCardCartButton, CoffeeCardContainer} from "./styles";
import { toast } from "react-toastify";

import { SelectedCoffee, SelectedCoffeesContext } from "../../../../context/CoffeeContext";

import { convertCoffeePriceToString } from '../../../../functions/convertCoffeePriceToString'

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

  const coffeeSelected: SelectedCoffee = {
    id: data.id,
    image: data.image,
    price: data.price,
    name: data.name,
    quantity: coffeeQuantity
  }

  const coffeePriceString = convertCoffeePriceToString(data.price, coffeeQuantity)

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
        <p className="CoffeePrice">R$ <span>{coffeePriceString}</span></p>
        <CoffeeQuantityButton quantity={coffeeQuantity} onQuantityChange={changeCoffeeQuantity} />
        <CoffeeCardCartButton onClick={() => {
          addNewCoffeeOnCart(coffeeSelected)
          toast.success('Café adicionado ao carrinho! 🛒')
        }}>
          <ShoppingCartSimple size={22} weight={'fill'} color='#FAFAFA' />
        </CoffeeCardCartButton>
      </CoffeeCardBuy>
    </CoffeeCardContainer>
  )
}