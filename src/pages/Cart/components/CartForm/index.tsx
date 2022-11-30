import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'

export function CartForm() {
  return (
    <div>
      <form>
        <fieldset>
          <legend>
            <MapPinLine />
            Endereço de Entrega <br />
            Informe o endereço onde deseja receber seu pedido
          </legend>
          <input type="text" placeholder='CEP' />
          <input type="text" placeholder='Rua' />
          <input type="number" placeholder='Número' />
          <input type="text" placeholder='Complemento' />
          <input type="text" placeholder='Bairro' />
          <input type="text" placeholder='Cidade' />
          <select name="uf" id="uf">
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>
            <CurrencyDollar />
            Pagamento <br />
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </legend>
          <ToggleGroup.Root
            className="ToggleContainer"
            type="single"
            aria-label="Escolha do método de pagamento"
          >
            <ToggleGroup.Item className='ToggleItem' value='credit' aria-label='Cartão de crédito'>
              <CreditCard />
              Cartão de Crédito
            </ToggleGroup.Item>

            <ToggleGroup.Item className='ToggleItem' value='debt' aria-label='Cartão de débito'>
              <Bank />
              Cartão de Débito
            </ToggleGroup.Item>

            <ToggleGroup.Item className='ToggleItem' value='money' aria-label='Dinheiro'>
              <Money />
              Dinheiro
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </fieldset>
      </form>
    </div>
  )
}