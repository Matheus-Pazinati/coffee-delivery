import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

import { FormTitle } from "../../styles";
import { CoffeeListContainer, CoffeeListContent, CoffeeListPrice } from "./styles";
import { BoughtCoffeeCard } from "../BoughtCoffeeCard";

import { SelectedCoffeesContext } from "../../../../context/CoffeeContext";

export function CoffeeList() {
  const navigate = useNavigate()
  const { selectedCoffees } = useContext(SelectedCoffeesContext)
  console.log(selectedCoffees)
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