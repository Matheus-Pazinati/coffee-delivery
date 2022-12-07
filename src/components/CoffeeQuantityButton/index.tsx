import { Minus, Plus } from "phosphor-react";
import { CoffeeCardQuantity } from "./styles";

import { CoffeeQuantityChangeMethods } from '../../pages/Home/components/CoffeeCard/index'

interface CoffeeQuantityButtonProps {
  quantity: number;
  onQuantityChange: (type: CoffeeQuantityChangeMethods) => void
}

export function CoffeeQuantityButton({quantity, onQuantityChange}: CoffeeQuantityButtonProps) {

  function handleQuantityChange(type: CoffeeQuantityChangeMethods) {
    onQuantityChange(type)
  }

  return (
    <CoffeeCardQuantity>
      <button
        onClick={() => {
          if (quantity > 0) {
            handleQuantityChange('decrement')
          }
        }}
      >
        <Minus size={16} />
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => {
          handleQuantityChange('increment')
          console.log('clicou')
          console.log(quantity)
        }}
      >
        <Plus size={16} />
      </button>
    </CoffeeCardQuantity>
  )
}