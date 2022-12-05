import { FormTitle } from "../../styles";
import { CoffeeListContainer, CoffeeListContent, CoffeeListPrice } from "./styles";

import { BoughtCoffeeCard } from "../BoughtCoffeeCard";

import { useNavigate } from 'react-router-dom'

export function CoffeeList() {
  const navigate = useNavigate()
  return (
    <CoffeeListContainer>
      <FormTitle>Cafés selecionados</FormTitle>
      <CoffeeListContent>
        <ul>
          <BoughtCoffeeCard />
          <BoughtCoffeeCard />
          <BoughtCoffeeCard />
        </ul>
        <CoffeeListPrice>
          <p>
            Total de itens
            <span>R$ 29,70</span>
          </p>
          <p>
            Entrega
            <span>R$ 3,50</span>
          </p>
          <p className="TotalPrice">
            Total
            <span>R$ 33,20</span>
          </p>
        </CoffeeListPrice>
        <button 
        type="submit" 
        form="addressForm" 
        className="OrderConfirm"
        onClick={() => {
          return navigate('/order')
        }}
        >
          Confirmar pedido
        </button>
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}