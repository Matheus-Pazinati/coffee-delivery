import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { BannerImage, HeaderContainer, HeaderContentContainer, HeaderIcon } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <BannerImage />
      <HeaderContentContainer>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <ul>
          <li>
            <HeaderIcon backgroundVariant="yellow-dark">
              <ShoppingCart size={16} weight={'fill'} />
            </HeaderIcon>
            <span>Compra simples e segura</span>
          </li>
          <li>
            <HeaderIcon backgroundVariant="base-text">
              <Package size={16} weight={'fill'} />
            </HeaderIcon>
            <span>Embalagem mantém o café intacto</span>
          </li>
          <li>
            <HeaderIcon backgroundVariant="yellow">
              <Timer size={16} weight={'fill'} />
            </HeaderIcon>
            <span>Entrega rápida e rastreada</span>
          </li>
          <li>
            <HeaderIcon backgroundVariant="purple">
              <Coffee size={16} weight={'fill'}  />
            </HeaderIcon>
            <span>O café chega quentinho até você</span>
          </li>
        </ul>
      </HeaderContentContainer>
    </HeaderContainer>
  )
}