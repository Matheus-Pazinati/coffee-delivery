import { RoundedIcon } from "../../components/RoundedIcon";

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import confirmImg from '../../assets/cd-delivery-confirmed.png'

import { OrderContainer, OrderContent, OrderStatus } from "./styles";

export function Order() {
  return (
    <OrderContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p className="OrderSubtitle">Agora é só aguardar que logo o café chegará até você</p>
        <OrderContent>
          <OrderStatus>
            <div>
              <RoundedIcon Icon={MapPin} bgColor={'purple'} />
              <p>
                Entrega em <span> Rua João Daniel Martinelli, 102</span> <br /> Farrapos - Porto Alegre, RS
              </p>
            </div>
            <div>
              <RoundedIcon Icon={Timer} bgColor={'yellow'} />
              <p>
                Previsão de entrega <br />
                <span> 20 min - 30 min </span>
              </p>
            </div>
            <div>
              <RoundedIcon Icon={CurrencyDollar} bgColor={'yellow-dark'} />
              <p>
                Pagamento na entrega <br />
                <span>Cartão de Crédito</span>
              </p>
            </div>
          </OrderStatus>
            <img src={confirmImg} alt="" />
          </OrderContent>
    </OrderContainer>
  )
}