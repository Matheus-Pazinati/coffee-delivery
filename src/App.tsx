import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from "./styles/global"
import { defaultTheme } from '../src/styles/themes/default'

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './AppRoutes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
