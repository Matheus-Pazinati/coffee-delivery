import { createContext, ReactNode, useState } from "react";

interface OrderFormContextProviderProps {
  children: ReactNode
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
}

export const OrderFormContext = createContext({} as OrderFormContextProps)

export function OrderFormContextProvider({ children }: OrderFormContextProviderProps) {

  const cepApiDataEmpty = {
    city: "",
    uf: ""
  }

  const [cepApiData, setCepApiData] = useState(cepApiDataEmpty)

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('credit')

  function addValuesInCityAndUfFieldsByZipCode(data: CepApiDataProps) {
    setCepApiData(data)
  }

  function clearValuesInCityAndUfFields() {
    setCepApiData(cepApiDataEmpty)
  }

  function changePaymentMethod(newValue: PaymentMethods) {
    setPaymentMethod(newValue)
  }

  return (
    <OrderFormContext.Provider value={{
      cepApiData,
      addValuesInCityAndUfFieldsByZipCode,
      clearValuesInCityAndUfFields,
      paymentMethod,
      changePaymentMethod
    }}>
      {children}
    </OrderFormContext.Provider>
  )
}