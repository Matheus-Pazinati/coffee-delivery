import headerImage from '../../../../assets/cd-banner.png'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Header() {
  return (
    <header>
      <img src={headerImage} alt="" />
      <div>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <ul>
          <li>
            <ShoppingCart size={16} />
            <span>Compra simples e segura</span>
          </li>
          <li>
            <Package size={16} />
            <span>Embalagem mantém o café intacto</span>
          </li>
          <li>
            <Timer size={16} />
            <span>Entrega rápida e rastreada</span>
          </li>
          <li>
            <Coffee size={16} />
            <span>O café chega quentinho até você</span>
          </li>
        </ul>
      </div>
    </header>
  )
}