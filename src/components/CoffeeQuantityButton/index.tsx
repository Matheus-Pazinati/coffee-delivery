import { CoffeeCardQuantity } from "./styles";

export function CoffeeQuantityButton() {
  return (
    <CoffeeCardQuantity>
      <button>-</button>
      <input type="number" readOnly value={1} />
      <button>+</button>
    </CoffeeCardQuantity>
  )
}