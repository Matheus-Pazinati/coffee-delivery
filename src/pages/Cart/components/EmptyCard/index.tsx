import emptyCartImg from '../../../../assets/cd-empty-cart.png'

import { EmptyCartContainer } from './styles'

import { Link } from 'react-router-dom'

export function EmptyCard() {
  return (
    <EmptyCartContainer>
      <img src={emptyCartImg} alt="Desenho de um carrinho de compras vazio" />
      <p>Seu carrinho não possui nenhum item.</p>
      <Link to={"/"}>Escolher um café</Link>
    </EmptyCartContainer>
  )
}