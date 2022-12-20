import { createContext, ReactNode } from "react";

interface OrderFormContextProviderProps {
  children: ReactNode
}

export const OrderFormContext = createContext({} as any)

export function OrderFormContextProvider({ children }: OrderFormContextProviderProps) {
  return (
    <OrderFormContext.Provider value={{}}>
      {children}
    </OrderFormContext.Provider>
  )
}