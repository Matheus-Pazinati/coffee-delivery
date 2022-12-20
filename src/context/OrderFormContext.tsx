import { createContext, ReactNode, useState } from "react";

interface OrderFormContextProviderProps {
  children: ReactNode
}

interface cepApiDataProps {
  city: string
  uf: string
}

interface OrderFormContextProps {
  cepApiData: cepApiDataProps
  addValuesInCityAndUfFieldsByZipCode: (data: cepApiDataProps) => void
  clearValuesInCityAndUfFields: () => void
}

export const OrderFormContext = createContext({} as OrderFormContextProps)

export function OrderFormContextProvider({ children }: OrderFormContextProviderProps) {

  const cepApiDataEmpty = {
    city: "",
    uf: ""
  }

  const [cepApiData, setCepApiData] = useState(cepApiDataEmpty)

  function addValuesInCityAndUfFieldsByZipCode(data: cepApiDataProps) {
    setCepApiData(data)
  }

  function clearValuesInCityAndUfFields() {
    setCepApiData(cepApiDataEmpty)
  }

  return (
    <OrderFormContext.Provider value={{
      cepApiData,
      addValuesInCityAndUfFieldsByZipCode,
      clearValuesInCityAndUfFields
    }}>
      {children}
    </OrderFormContext.Provider>
  )
}