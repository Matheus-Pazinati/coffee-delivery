import { BoughtCoffeeCard } from "../BoughtCoffeeCard";

export function CoffeeList() {
  return (
    <div>
      <h2>Cafés selecionados</h2>
      <ul>
        <BoughtCoffeeCard />
      </ul>
      <div>
        <p>
          Total de itens
          <span>R$ 29,70</span>
        </p>
        <p>
          Entrega
          <span>R$ 3,50</span>
        </p>
        <p>
          Total
          <span>R$ 33,20</span>
        </p>
      </div>
      <button type="submit" form="addressForm">Confirmar pedido</button>
    </div>
  )
}