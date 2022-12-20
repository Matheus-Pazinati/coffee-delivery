import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { useTheme } from 'styled-components';

import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, WarningCircle } from 'phosphor-react'

import { FormInputContainer, FormContainer, FormInputBase, FormInputSmall, FormInputVerySmall, ErrorMessage } from './styles';
import { FormTitle } from '../../styles';
import { FocusEvent, useContext, useState } from 'react';
import { OrderFormContext } from '../../../../context/OrderFormContext';

const orderAddressValidationSchema = z.object({
  cep: z.string()
    .min(1, { message: 'Este campo é de preenchimento obrigatório' })
    .regex(new RegExp(/\d{5}[-.\s]?\d{3}/), { message: 'Este formato de CEP é inválido' })
    .length(8, { message: 'Este formato de CEP é inválido' })
    ,

  street: z.string()
    .min(1, { message: 'Este campo é de preenchimento obrigatório' }),

  homeNumber: z.string()
    .min(1, { message: 'Este campo é de preenchimento obrigatório' })
    .refine((val) => Number(val)),

  complement: z.string(),

  district: z.string().min(1, { message: 'Este campo é de preenchimento obrigatório' }),
})

type OrderAddressSchemaProps = Zod.infer<typeof orderAddressValidationSchema>

export function AdressForm() {
  const colors = useTheme()

  const { 
    cepApiData,
    addValuesInCityAndUfFieldsByZipCode,
    clearValuesInCityAndUfFields } = useContext(OrderFormContext)

  const { register, handleSubmit, setError, setValue, clearErrors, formState: { errors } } = useForm<OrderAddressSchemaProps>({
    resolver: zodResolver(orderAddressValidationSchema)
  })

  async function handleCepBlur(event: FocusEvent<HTMLInputElement>) {
    const cep = event.target.value
    const cepFormatted = cep.replace(/\D/g, '');

    const cepIsValid = Boolean(Number(cepFormatted))
    const cepIsFilled = cepFormatted.length === 8

    setValue("cep", cep, { shouldValidate: true })

    if (!cepIsValid || !cepIsFilled) {
      clearValuesInCityAndUfFields()
      return
    }

    const cepApiResponse = await fetch(`https://viacep.com.br/ws/${cepFormatted}/json/`)
    const cepApiJson = await cepApiResponse.json()

    if (cepApiJson.erro) {
      setError('cep', { type: "custom", message: "Este CEP não existe" })
      clearValuesInCityAndUfFields()
      return
    }

    addValuesInCityAndUfFieldsByZipCode({
      city: cepApiJson.localidade,
      uf: cepApiJson.uf
    })

    clearErrors('cep')
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
              onBlur={handleCepBlur}
              isInputInvalid={Boolean(errors.cep)}
            />
            {errors.cep && (
              <ErrorMessage>
                <WarningCircle size={15} weight={'fill'} color="#D9042B" />
                {errors.cep.message}
              </ErrorMessage>
            )}
            <FormInputBase
              type="text"
              placeholder='Rua'
              {...register('street')}
              isInputInvalid={Boolean(errors.street)}
            />
            {errors.street && (
              <ErrorMessage>
                <WarningCircle size={15} weight={'fill'} color="#D9042B" />
                {errors.street.message}
              </ErrorMessage>
            )}
            <FormInputContainer>
              <div>
                <FormInputSmall
                  type="number"
                  placeholder='Número'
                  {...register('homeNumber')}
                  isInputInvalid={Boolean(errors.homeNumber)}
                />
                {errors.homeNumber && (
                  <ErrorMessage>
                    <WarningCircle size={15} weight={'fill'} color="#D9042B" />
                    {errors.homeNumber.message}
                  </ErrorMessage>
                )}
              </div>
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
              <div>
                <FormInputSmall
                  type="text"
                  placeholder='Bairro'
                  {...register('district')}
                  isInputInvalid={Boolean(errors.district)}
                />
                {errors.district && <ErrorMessage>{errors.district.message}</ErrorMessage>}
              </div>
              <FormInputBase
                type="text"
                placeholder='Cidade'
                readOnly
                value={cepApiData.city}
                isInputInvalid={Boolean(errors.cep)}
              />
              <FormInputVerySmall
                type="text"
                value={cepApiData.uf}
                readOnly
                placeholder='UF'
                isInputInvalid={Boolean(errors.cep)}
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