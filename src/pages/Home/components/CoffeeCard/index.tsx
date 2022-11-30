import { ShoppingCartSimple } from "phosphor-react";

import { CoffeeQuantityButton } from "../../../../components/CoffeeQuantityButton";

import { CoffeeCardBuy, CoffeeCardCartButton, CoffeeCardContainer} from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="https://phx02pap001files.storage.live.com/y4mwSV8gUllHh6IcSR09YuYK26aCKhMcqBWbsdwtPAEM6We-EQly_NVXN8weEyQPh7w0haeDTy6KE3eZv-7yHcpR6t7bTFrCKu9c_DrThvjJ5BSDhbbbW7ssf_RK8yqjcBiMCqe7yEi0cEBIsSBR38KVBC6Rw6sKc4Psl7n0I3XvLaXHqkM6pHpf4J0k7EGXCZ2?width=100&height=100&cropmode=none" alt="" />
      <label>Tradicional</label>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CoffeeCardBuy>
        <p>R$ <span>9,90</span></p>
        <CoffeeQuantityButton />
        <CoffeeCardCartButton>
          <ShoppingCartSimple size={22} weight={'fill'} color='#FAFAFA' />
        </CoffeeCardCartButton>
      </CoffeeCardBuy>
    </CoffeeCardContainer>
  )
}