import { Minus, Plus } from "phosphor-react";
import { CoffeeCardQuantity } from "./styles";

export function CoffeeQuantityButton() {
  return (
    <CoffeeCardQuantity>
      <button>
        <Minus size={16} />
      </button>
      <span>1</span>
      <button>
        <Plus size={16} />
      </button>
    </CoffeeCardQuantity>
  )
}