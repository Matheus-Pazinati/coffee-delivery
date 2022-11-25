import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from "./styles/global"
import { defaultTheme } from '../src/styles/themes/default'

import { Logo } from "./components/Logo"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Logo />
      <h1>Coffee Delivery</h1>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
