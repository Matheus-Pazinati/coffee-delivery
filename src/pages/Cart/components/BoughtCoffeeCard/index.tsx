import { Trash } from "phosphor-react";

import { CoffeeQuantityButton } from "../../../../components/CoffeeQuantityButton";

import { BoughtCoffeeCardContainer, BoughtCoffeeContent } from "./styles";

export function BoughtCoffeeCard() {
  return (
    <BoughtCoffeeCardContainer>
      <BoughtCoffeeContent >
        <img src="https://phx02pap001files.storage.live.com/y4mwSV8gUllHh6IcSR09YuYK26aCKhMcqBWbsdwtPAEM6We-EQly_NVXN8weEyQPh7w0haeDTy6KE3eZv-7yHcpR6t7bTFrCKu9c_DrThvjJ5BSDhbbbW7ssf_RK8yqjcBiMCqe7yEi0cEBIsSBR38KVBC6Rw6sKc4Psl7n0I3XvLaXHqkM6pHpf4J0k7EGXCZ2?width=100&height=100&cropmode=none" alt="" />
        <div className="CoffeeData">
          <p>Expresso Tradicional</p>
          <div className="CoffeeButtons">
            <CoffeeQuantityButton />
            <button className="CoffeeRemove">
              <Trash size={18} color={'#8047F8'} />
              Remover
            </button>
          </div>
        </div>
      </BoughtCoffeeContent >
      <span className="CoffeePrice">R$ 9,90</span>
    </BoughtCoffeeCardContainer>
  )
}