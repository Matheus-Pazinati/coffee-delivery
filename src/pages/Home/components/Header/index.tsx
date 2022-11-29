import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import { BenefitTag } from './components/BenefitTag'

import { BannerImage, HeaderContainer, HeaderContentContainer } from './styles'

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
          <BenefitTag 
            Icon={ShoppingCart} 
            content="Compra simples e segura" 
            bgColor='yellow-dark'
          />

          <BenefitTag 
            Icon={Timer} 
            content="Entrega rápida e rastreada" 
            bgColor='yellow'
          />

          <BenefitTag 
            Icon={Package} 
            content="Embalagem mantém o café intacto" 
            bgColor='base-text'
          />

          <BenefitTag 
            Icon={Coffee} 
            content="O café chega quentinho até você" 
            bgColor='purple'
          />
        </ul>
      </HeaderContentContainer>
    </HeaderContainer>
  )
}