import { Logo } from "../Logo";

import {MapPin, ShoppingCart } from 'phosphor-react'
import { CartContainer, LocationContainer, MenuContainer } from "./styles";
import { useTheme } from "styled-components";

export function Menu() {

  const colors = useTheme()
  return (
    <MenuContainer>
      <Logo />
      <CartContainer> 
        <LocationContainer 
          href="https://www.google.com/maps/place/Rocketseat/@-27.2108873,-49.6461965,17z/data=!3m1!4b1!4m5!3m4!1s0x94dfb9a50e5cd2af:0xbac4be8f3bcf9b01!8m2!3d-27.2108873!4d-49.6440078" 
          target={"_blank"}
        >
          <MapPin size={22} weight={"fill"} color={colors.purple} />
          <span>São Paulo, SP</span>
        </LocationContainer>
        <div>
          <a href="#">
            <ShoppingCart size={22} weight={"fill"} />
          </a>
        </div>
      </CartContainer>
    </MenuContainer>
  )
}