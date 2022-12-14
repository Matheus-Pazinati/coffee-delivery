import { useContext } from "react";
import { useNavigate } from 'react-router-dom'

import { FormTitle } from "../../styles";
import { CoffeeListContainer, CoffeeListContent, CoffeeListPrice } from "./styles";
import { BoughtCoffeeCard, CoffeeCartCardProps } from "../BoughtCoffeeCard";

import { SelectedCoffeesContext } from "../../../../context/CoffeeContext";

import { convertCoffeePriceToString } from "../../../../functions/convertCoffeePriceToString";

export function CoffeeList() {
  const navigate = useNavigate()
  const { selectedCoffees } = useContext(SelectedCoffeesContext)

  const deliveryValue = 3.50;
  
  const coffeesPrices = selectedCoffees.map((coffee) => {
    return coffee.price * coffee.quantity
  })

  const totalPriceOfCoffees = coffeesPrices.reduce((total, current) => {
    return total + current
  }, 0)

  return (
    <CoffeeListContainer>
      <FormTitle>Cafés selecionados</FormTitle>
      <CoffeeListContent>
        <ul>
          {selectedCoffees.map((coffee) => {
            return (
              <BoughtCoffeeCard data={coffee} key={coffee.id} />
            )
          })}
        </ul>
        <CoffeeListPrice>
          <p>
            Total de itens
            <span>R$ { convertCoffeePriceToString(totalPriceOfCoffees, 1) }</span>
          </p>
          <p>
            Entrega
            <span>R$ 3,50</span>
          </p>
          <p className="TotalPrice">
            Total
            <span>R$ {convertCoffeePriceToString(totalPriceOfCoffees + deliveryValue, 1)}</span>
          </p>
        </CoffeeListPrice>
        <button 
          type="submit" 
          form="addressForm" 
          className="OrderConfirm"
          onClick={() => {
            console.log('clicou')
          }}
        >
          Confirmar pedido
        </button>
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}