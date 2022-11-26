import { Logo } from "../Logo";

import {MapPin } from 'phosphor-react'

export function Menu() {
  return (
    <section>
      <Logo />
      <div> 
        <div>
          <MapPin size={22} />
          <span>São Paulo, SP</span>
        </div>
      </div>
    </section>
  )
}