import { ChangeEvent, createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { OrderAddressSchemaProps } from "../pages/Cart/components/AdressForm";

import { SelectedCoffeesContext } from "./CoffeeContext";

interface OrderFormContextProviderProps {
  children: ReactNode
}

interface ControlledFieldsValuesProps {
  street: string
  homeNumber: string
  complement: string
  district: string
}

interface CepApiDataProps {
  city: string
  uf: string
}

export type PaymentMethods = "credit" | "debt" | "money"

interface OrderFormContextProps {
  cepApiData: CepApiDataProps
  addValuesInCityAndUfFieldsByZipCode: (data: CepApiDataProps) => void
  clearValuesInCityAndUfFields: () => void
  paymentMethod: PaymentMethods
  changePaymentMethod: (newValue: PaymentMethods) => void
  handleCreateNewOrder: (data: OrderAddressSchemaProps) => void
  valuesOfControlledFormFields: ControlledFieldsValuesProps
  isOrderConfirmed: boolean
  moneyChange: number | undefined;
  handleMoneyChange: (event: any) => void
  changeError: boolean
}

export const OrderFormContext = createContext({} as OrderFormContextProps)

export function OrderFormContextProvider({ children }: OrderFormContextProviderProps) {

  const cepApiDataEmpty = {
    city: "",
    uf: ""
  }

  const navigate = useNavigate()

  const { clearCoffeeCart, totalPriceOfCoffees } = useContext(SelectedCoffeesContext)

  const [cepApiData, setCepApiData] = useState(cepApiDataEmpty)

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('credit')

  const [moneyChange, setMoneyChange] = useState<number | undefined>(undefined)

  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)

  const [changeError, setChangeError] = useState(false)

  function handleMoneyChange(event: ChangeEvent<HTMLInputElement>) {
    if (Number(event.target.value) < totalPriceOfCoffees + 3.50) {
      setChangeError(true)
      return
    }
    setChangeError(false)
    setMoneyChange(Number(event.target.value) - (totalPriceOfCoffees + 3.50))
  }

  const [valuesOfControlledFormFields, setValuesOfControlledFormFields] = useState<ControlledFieldsValuesProps>({
    street: '',
    complement: '',
    homeNumber: '',
    district: ''
  })

  function addValuesInCityAndUfFieldsByZipCode(data: CepApiDataProps) {
    setCepApiData(data)
  }

  function clearValuesInCityAndUfFields() {
    setCepApiData(cepApiDataEmpty)
  }

  function changePaymentMethod(newValue: PaymentMethods) {
    setPaymentMethod(newValue)
  }

  function handleCreateNewOrder(data: OrderAddressSchemaProps) {
    setIsOrderConfirmed(true)
    setValuesOfControlledFormFields({
      street: data.street,
      homeNumber: data.homeNumber,
      complement: data.complement,
      district: data.district
    })
    clearCoffeeCart()
    navigate("/order")
  }

  return (
    <OrderFormContext.Provider value={{
      cepApiData,
      addValuesInCityAndUfFieldsByZipCode,
      clearValuesInCityAndUfFields,
      paymentMethod,
      changePaymentMethod,
      handleCreateNewOrder,
      valuesOfControlledFormFields,
      isOrderConfirmed,
      moneyChange,
      handleMoneyChange,
      changeError
    }}>
      {children}
    </OrderFormContext.Provider>
  )
}