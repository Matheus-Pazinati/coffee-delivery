import { ShoppingCartSimple } from "phosphor-react";

import { CoffeeQuantityButton } from "../../../../components/CoffeeQuantityButton";

import { CoffeeProps } from '../CoffeeMenu/index'

import { CoffeeCardBuy, CoffeeCardCartButton, CoffeeCardContainer} from "./styles";

interface CoffeeCardProps {
  data: CoffeeProps
}

export function CoffeeCard({data}: CoffeeCardProps) {
  
  const coffeePriceView = data.price.toString().replace('.', ',').concat('0')

  return (
    <CoffeeCardContainer>
      <img src={data.image} alt={`Xícara contendo o café ${data.name}`} />
      <div className="CoffeeTagsContainer">
       {data.tags.map((tag) => {
        return (
          <label>{tag}</label>
        )
       })}
      </div>
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <CoffeeCardBuy>
        <p className="CoffeePrice">R$ <span>{coffeePriceView}</span></p>
        <CoffeeQuantityButton />
        <CoffeeCardCartButton>
          <ShoppingCartSimple size={22} weight={'fill'} color='#FAFAFA' />
        </CoffeeCardCartButton>
      </CoffeeCardBuy>
    </CoffeeCardContainer>
  )
}