import { createContext, ReactNode } from 'react'

export const CoffeeContext = createContext([] as any)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({children}: CoffeeContextProviderProps) {
  return (
    <CoffeeContext.Provider value={["coffee"]}>
      {children}
    </CoffeeContext.Provider>
  )
}