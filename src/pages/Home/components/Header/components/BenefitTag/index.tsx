import { ShoppingCart } from 'phosphor-react'
import { BenefitTagContainer, HeaderIcon } from "./styles";

export type IconBackgroundColors = 'yellow' | 'yellow-dark' | 'purple' | 'base-text'

interface BenefitTagProps {
  Icon: typeof ShoppingCart
  content: string
  bgColor: IconBackgroundColors
}

export function BenefitTag({Icon, content, bgColor}: BenefitTagProps) {
  return (
    <BenefitTagContainer>
      <HeaderIcon backgroundVariant={bgColor}>
        <Icon size={16} weight={'fill'} />
      </HeaderIcon>
      <span>{content}</span>
    </BenefitTagContainer>
  )
}