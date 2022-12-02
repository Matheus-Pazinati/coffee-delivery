import { ShoppingCart } from 'phosphor-react'
import { HeaderIcon } from "./styles";

export type IconBackgroundColors = 'yellow' | 'yellow-dark' | 'purple' | 'base-text'

interface RoundedIconProps {
  Icon: typeof ShoppingCart
  bgColor: IconBackgroundColors
}

export function RoundedIcon({Icon, bgColor}: RoundedIconProps) {
  return (
    <HeaderIcon backgroundVariant={bgColor}>
      <Icon size={16} weight={'fill'} />
    </HeaderIcon>
  )
}