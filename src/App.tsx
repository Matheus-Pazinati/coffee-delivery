import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from "./styles/global"
import { defaultTheme } from '../src/styles/themes/default'

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './AppRoutes'
import { CoffeeContextProvider } from './context/CoffeeContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CoffeeContextProvider>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
