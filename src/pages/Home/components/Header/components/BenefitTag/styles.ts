import styled from "styled-components";
import { IconBackgroundColors } from ".";

interface HeaderIconsProps {
  backgroundVariant: IconBackgroundColors
}

export const BenefitTagContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const HeaderIcon = styled.i<HeaderIconsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme[`${props.backgroundVariant}` as IconBackgroundColors]};
  color: ${({theme}) => theme.background};
  padding: 0.5rem;
  border-radius: 50%;
`