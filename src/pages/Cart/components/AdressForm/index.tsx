import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { useTheme } from 'styled-components';

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'

import { FormInputContainer, FormContainer, FormInputBase, FormInputSmall } from './styles';

export function AdressForm() {
  const colors = useTheme()
  return (
    <FormContainer>
      <h2>Complete seu pedido</h2>
      <form id="addressForm">
        <fieldset>
          <h3>
            <MapPinLine size={22} color={colors['yellow-dark']} />
            <div>
              Endereço de Entrega 
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </h3>
          <div>
            <FormInputSmall type="text" placeholder='CEP' />
            <FormInputBase type="text" placeholder='Rua' />
            <FormInputContainer>
              <FormInputSmall type="number" placeholder='Número' />
              <FormInputBase type="text" placeholder='Complemento' />
            </FormInputContainer>
            <FormInputContainer>
              <FormInputSmall type="text" placeholder='Bairro' />
              <FormInputBase type="text" placeholder='Cidade' />
              <select name="uf" id="uf">
                <option value="SP">SP</option>
                <option value="RJ">RJ</option>
                <option value="MG">MG</option>
              </select>
            </FormInputContainer>
          </div>
        </fieldset>
        <fieldset>
          <h3>
            <CurrencyDollar size={22} color={colors.purple} />
            <div>
             Pagamento
             <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </h3>
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
    </FormContainer>
  )
}