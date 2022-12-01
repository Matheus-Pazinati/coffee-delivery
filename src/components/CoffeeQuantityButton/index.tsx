import { Minus, Plus } from "phosphor-react";
import { CoffeeCardQuantity } from "./styles";

export function CoffeeQuantityButton() {
  return (
    <CoffeeCardQuantity>
      <button>
        <Minus size={16} />
      </button>
      <input type="number" readOnly value={1} />
      <button>
        <Plus size={16} />
      </button>
    </CoffeeCardQuantity>
  )
}