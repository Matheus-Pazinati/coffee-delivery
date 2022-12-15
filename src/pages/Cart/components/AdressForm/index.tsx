import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { useTheme } from 'styled-components';

import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'

import { FormInputContainer, FormContainer, FormInputBase, FormInputSmall, FormInputVerySmall } from './styles';
import { FormTitle } from '../../styles';
import { ChangeEvent, useState } from 'react';

const orderAddressValidationSchema = z.object({
  cep: z.string().min(1, { message: 'Este campo é de preenchimento obrigatório' }).regex(new RegExp(/\d{5}[-.\s]?\d{3}/), { message: 'Este formato de CEP é inválido' }),
  street: z.string().min(1, { message: 'Este campo é de preenchimento obrigatório' }),
  homeNumber: z.string().min(1, { message: 'Este campo é de preenchimento obrigatório' }).refine((val) => Number(val)),
  complement: z.string(),
  district: z.string().min(1, {message: 'Este campo é de preenchimento obrigatório' }),
})

type OrderAddressSchemaProps = Zod.infer<typeof orderAddressValidationSchema>

export function AdressForm() {
  const colors = useTheme()

  const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm<OrderAddressSchemaProps>({
    resolver: zodResolver(orderAddressValidationSchema)
  })

  const cepApiDataEmpty = {
    city: "",
    uf: ""
  }

  const [cepApiData, setCepApiData] = useState(cepApiDataEmpty)

  async function handleCepChange(event: ChangeEvent<HTMLInputElement>) {
    const cep = event.target.value
    const cepFormatted = cep.replace("-", " ").replace(".", " ").replaceAll(" ", "")

    const cepFilled = cepFormatted.length === 8

    if (cepFilled && Boolean(Number(cepFormatted))) {
      try {
        const cepApiResponse = await fetch(`https://viacep.com.br/ws/${cepFormatted}/json/`)
        const cepApiJson = await cepApiResponse.json()

        if (cepApiJson.erro) {
          setCepApiData(cepApiDataEmpty)
          setError('cep',  { type:"custom", message:"Este CEP não existe" })
          return 
        }
    
        setCepApiData({
          city: cepApiJson.localidade,
          uf: cepApiJson.uf
        })
      } catch (error) {
          console.log(error)
          throw new Error(`Erro: ${error}`)
      }

      clearErrors('cep')

    } else {
      setCepApiData(cepApiDataEmpty)
    }

  }

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
              onChange={handleCepChange}
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
                readOnly
                value={cepApiData.city}
              />
              <FormInputVerySmall
                type="text" 
                value={cepApiData.uf} 
                readOnly
                placeholder='UF'
              />

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