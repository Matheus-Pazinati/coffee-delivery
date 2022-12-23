import { createContext, ReactNode, useContext, useState } from "react";

import { OrderAddressSchemaProps } from "../pages/Cart/components/AdressForm";

import { useNavigate } from 'react-router-dom'
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
}

export const OrderFormContext = createContext({} as OrderFormContextProps)

export function OrderFormContextProvider({ children }: OrderFormContextProviderProps) {

  const navigate = useNavigate()

  const cepApiDataEmpty = {
    city: "",
    uf: ""
  }

  const { selectedCoffees } = useContext(SelectedCoffeesContext)

  const [cepApiData, setCepApiData] = useState(cepApiDataEmpty)

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('credit')

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
    setValuesOfControlledFormFields({
      street: data.street,
      homeNumber: data.homeNumber,
      complement: data.complement,
      district: data.district
    })
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
      valuesOfControlledFormFields
    }}>
      {children}
    </OrderFormContext.Provider>
  )
}