import emptyCartImg from '../../../../assets/cd-empty-cart.png'

export function EmptyCard() {
  return (
    <div>
      <img src={emptyCartImg} alt="Desenho de um carrinho de compras vazio" />
      <p>Seu carrinho não possui nenhum item.</p>
      <button>Escolher um café</button>
    </div>
  )
}