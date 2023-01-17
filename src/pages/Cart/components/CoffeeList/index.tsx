import { useContext } from "react";

import * as Checkbox from '@radix-ui/react-checkbox';

import { FormTitle } from "../../styles";
import { CheckboxRoot, CoffeeListContainer, CoffeeListContent, CoffeeListPrice, MoneyChangeContainer } from "./styles";
import { BoughtCoffeeCard } from "../BoughtCoffeeCard";

import { Check } from 'phosphor-react'

import { SelectedCoffeesContext } from "../../../../context/CoffeeContext";

import { convertCoffeePriceToString } from "../../../../functions/convertCoffeePriceToString";
import { OrderFormContext } from "../../../../context/OrderFormContext";

export function CoffeeList() {
  const { selectedCoffees } = useContext(SelectedCoffeesContext)
  const { paymentMethod } = useContext(OrderFormContext)

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
            <span>R$ {convertCoffeePriceToString(totalPriceOfCoffees, 1)}</span>
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
        {paymentMethod === "money" && (
          <MoneyChangeContainer>
            <CheckboxRoot id="moneyChange">
              <Checkbox.Indicator>
                <Check size={24} weight={"bold"} color={"#4B2995"} />
              </Checkbox.Indicator>
            </CheckboxRoot>
            <label htmlFor="moneyChange">Precisa de troco para o pagamento?</label>
          </MoneyChangeContainer>
        )}
        <button
          type="submit"
          form="addressForm"
          className="OrderConfirm"
        >
          Confirmar pedido
        </button>
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}