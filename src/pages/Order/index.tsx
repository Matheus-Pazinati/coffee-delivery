import { RoundedIcon } from "../../components/RoundedIcon";

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import confirmImg from '../../assets/cd-delivery-confirmed.png'
import orderNotFoundImg from '../../assets/cd-coffee-not-found.png'

import { OrderContainer, OrderContent, OrderStatus } from "./styles";
import { useContext } from "react";
import { OrderFormContext } from "../../context/OrderFormContext";
import { useNavigate } from "react-router-dom";
import { ComponentNotFound } from "../../components/ComponentNotFound";

export function Order() {

  const navigate = useNavigate()

  const paymentMethodView = {
    credit: "Cartão de Crédito",
    debt: "Cartão de Débito",
    money: "Dinheiro"
  }

  const { valuesOfControlledFormFields, paymentMethod, cepApiData, isOrderConfirmed } = useContext(OrderFormContext)
  if (isOrderConfirmed) {
    return (
      <OrderContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p className="OrderSubtitle">Agora é só aguardar que logo o café chegará até você</p>
        <OrderContent>
          <OrderStatus>
            <div>
              <RoundedIcon Icon={MapPin} bgColor={'purple'} />
              <p>
                Entrega em <span>
                  {valuesOfControlledFormFields.street}, {valuesOfControlledFormFields.homeNumber} {valuesOfControlledFormFields.complement}
                </span> <br /> {valuesOfControlledFormFields.district} - {cepApiData.city}, {cepApiData.uf}
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
                <span>{paymentMethodView[paymentMethod]}</span>
              </p>
            </div>
          </OrderStatus>
          <img src={confirmImg} alt="Pessoa sentada em uma motocicleta com uma entrega para realizar" />
        </OrderContent>
      </OrderContainer>
    )
  } else {
    return (
      <ComponentNotFound
        description="Seu pedido ainda não foi confirmado."
        image={orderNotFoundImg}
      />
    )
  }
}