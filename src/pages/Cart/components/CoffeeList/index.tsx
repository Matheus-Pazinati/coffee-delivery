import { useContext, useState } from "react";

import * as Checkbox from '@radix-ui/react-checkbox';

import { FormTitle } from "../../styles";
import { ChangeInputContainer, CheckboxRoot, CoffeeListContainer, CoffeeListContent, CoffeeListPrice, MoneyChangeContainer } from "./styles";
import { BoughtCoffeeCard } from "../BoughtCoffeeCard";

import { Check } from 'phosphor-react'

import { SelectedCoffeesContext } from "../../../../context/CoffeeContext";

import { convertCoffeePriceToString } from "../../../../functions/convertCoffeePriceToString";
import { OrderFormContext } from "../../../../context/OrderFormContext";

export function CoffeeList() {
  const { selectedCoffees, totalPriceOfCoffees } = useContext(SelectedCoffeesContext)
  const { paymentMethod, handleMoneyChange, changeError } = useContext(OrderFormContext)

  const deliveryValue = 3.50;

  const [isMoneyChangeChecked, setIsMoneyChangeChecked] = useState(false)

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
            <CheckboxRoot 
              id="moneyChange"
              checked={isMoneyChangeChecked} 
              onCheckedChange={() => {
                setIsMoneyChangeChecked(!isMoneyChangeChecked)
              }}>
              <Checkbox.Indicator>
                <Check size={24} weight={"bold"} color={"#4B2995"} />
              </Checkbox.Indicator>
            </CheckboxRoot>
            <label htmlFor="moneyChange">Precisa de troco para o pagamento?</label>
          </MoneyChangeContainer>
        )}
        {isMoneyChangeChecked && (
          <ChangeInputContainer wrongValue={changeError}>
            <input 
              type="number" 
              id="change" 
              placeholder="Qual o valor que você irá pagar?"
              onBlur={handleMoneyChange}
            />
            {changeError ? <p className="changeError">O valor informado é menor que o total da compra.</p> : null}
          </ChangeInputContainer>
        )}
        <button
          type="submit"
          form="addressForm"
          className="OrderConfirm"
          disabled={changeError}
        >
          Confirmar pedido
        </button>
      </CoffeeListContent>
    </CoffeeListContainer>
  )
}