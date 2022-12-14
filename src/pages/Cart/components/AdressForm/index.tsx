import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { useTheme } from 'styled-components';

import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'

import { FormInputContainer, FormContainer, FormInputBase, FormInputSmall } from './styles';
import { FormTitle } from '../../styles';

const orderAddressValidationSchema = z.object({
  cep: z.string().min(1, { message: 'Este campo é de preenchimento obrigatório' }).regex(new RegExp(/\d{5}[-.\s]?\d{3}/), { message: 'Este formato de CEP é inválido' }),
  street: z.string().min(1, { message: 'Este campo é de preenchimento obrigatório' }),
  homeNumber: z.string().min(1, { message: 'Este campo é de preenchimento obrigatório' }).refine((val) => Number(val)),
  complement: z.string(),
  district: z.string().min(1, {message: 'Este campo é de preenchimento obrigatório' }),
  city: z.string({ invalid_type_error: 'Este campo não permite este tipo de dado' }).min(1, {message: 'Este campo é de preenchimento obrigatório' }),
  state: z.string()
})

type OrderAddressSchemaProps = Zod.infer<typeof orderAddressValidationSchema>

const abbreviationOfStates = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

export function AdressForm() {
  const colors = useTheme()

  const { register, handleSubmit, formState: { errors } } = useForm<OrderAddressSchemaProps>({
    resolver: zodResolver(orderAddressValidationSchema)
  })

  function handleCreateNewOrder(data: OrderAddressSchemaProps) {
    console.log(data)
  }

  return (
    <FormContainer>
      <FormTitle>Complete seu pedido</FormTitle>
      <form 
        id="addressForm"
        onSubmit={handleSubmit(handleCreateNewOrder)}
      >
        <fieldset>
          <h3>
            <MapPinLine size={22} color={colors['yellow-dark']} />
            <div>
              Endereço de Entrega 
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </h3>
          <div>
            <FormInputSmall 
              type="text" 
              placeholder='CEP' 
              {...register('cep')}
            />
            {errors.cep && <p>{errors.cep.message}</p>}
            <FormInputBase 
              type="text" 
              placeholder='Rua'
              {...register('street')} 
            />
            {errors.street && <p>{errors.street.message}</p>}
            <FormInputContainer>
              <FormInputSmall 
                type="number" 
                placeholder='Número' 
                {...register('homeNumber')}
              />
              {errors.homeNumber && <p>{errors.homeNumber.message}</p>}
              <label htmlFor="complement">
                <FormInputBase 
                  type="text" 
                  id='complement' 
                  placeholder='Complemento' 
                  {...register('complement')}
                />
                <i>Opcional</i>
              </label>
            </FormInputContainer>
            <FormInputContainer>
              <FormInputSmall 
                type="text" 
                placeholder='Bairro' 
                {...register('district')}
              />
              {errors.district && <p>{errors.district.message}</p>}
              <FormInputBase 
                type="text" 
                placeholder='Cidade' 
                {...register('city')}
              />
              {errors.city && <p>{errors.city.message}</p>}
              <div className='SelectContainer'>
                <select 
                  id="uf" 
                  {...register('state')} 
                >
                  {abbreviationOfStates.map((abbreviation) => {
                    return (
                      <option value={abbreviation}>{abbreviation}</option>
                    )
                  })}
                </select>
              </div>

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
            defaultValue='credit'
          >
            <ToggleGroup.Item className='ToggleItem' value='Cartão de Crédito' aria-label='Cartão de crédito'>
              <CreditCard size={16} color={colors.purple} />
              Cartão de Crédito
            </ToggleGroup.Item>

            <ToggleGroup.Item className='ToggleItem' value='Cartão de Débito' aria-label='Cartão de débito'>
              <Bank size={16} color={colors.purple} />
              Cartão de Débito
            </ToggleGroup.Item>

            <ToggleGroup.Item className='ToggleItem' value='Dinheiro' aria-label='Dinheiro'>
              <Money size={16} color={colors.purple} />
              Dinheiro
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </fieldset>
      </form>
    </FormContainer>
  )
}