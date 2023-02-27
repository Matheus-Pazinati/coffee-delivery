import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { RoundedIcon } from '../../../../components/RoundedIcon'

import { BannerImage, HeaderContainer, HeaderContentContainer } from './styles'

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <BannerImage />
        <HeaderContentContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>
          <ul>
            <li>
              <RoundedIcon
                Icon={ShoppingCart}
                bgColor='yellow-dark'
              />
              Compra simples e segura
            </li>
            <li>
              <RoundedIcon
                Icon={Timer}
                bgColor='yellow'
              />
              Entrega rápida e rastreada
            </li>
            <li>
              <RoundedIcon
                Icon={Package}
                bgColor='base-text'
              />
              Embalagem mantém o café intacto
            </li>
            <li>
              <RoundedIcon
                Icon={Coffee}
                bgColor='purple'
              />
              O café chega fresquinho até você
            </li>
          </ul>
        </HeaderContentContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}