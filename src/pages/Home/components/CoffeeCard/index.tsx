import { ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return (
    <li>
      <img src="https://phx02pap001files.storage.live.com/y4mwSV8gUllHh6IcSR09YuYK26aCKhMcqBWbsdwtPAEM6We-EQly_NVXN8weEyQPh7w0haeDTy6KE3eZv-7yHcpR6t7bTFrCKu9c_DrThvjJ5BSDhbbbW7ssf_RK8yqjcBiMCqe7yEi0cEBIsSBR38KVBC6Rw6sKc4Psl7n0I3XvLaXHqkM6pHpf4J0k7EGXCZ2?width=100&height=100&cropmode=none" alt="" />
      <span>Tradicional</span>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <div>
        <p>R$ <span>9,90</span></p>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button>
          <ShoppingCart />
        </button>
      </div>
    </li>
  )
}