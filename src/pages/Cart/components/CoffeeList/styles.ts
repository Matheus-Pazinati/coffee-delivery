import styled from "styled-components";
import * as Checkbox from '@radix-ui/react-checkbox';

interface ChangeError {
  wrongValue: boolean;
}

export const CoffeeListContainer = styled.div`
  margin-top: 2.5rem;
  @media (min-width: 750px) {
    padding: 0 5rem;
  }
  @media (min-width: 1350px) {
    padding: 0;
    flex: 1;
  }
`

export const CoffeeListContent = styled.div`
  background-color: ${({ theme }) => theme["base-card"]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;

  @media (min-width: 750px) {
     border-radius: 6px 44px;
     padding: 1rem 2.5rem;
  }

  .OrderConfirm {
    padding: 0.75rem;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.yellow};
    border-radius: 6px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.875rem;

    @media (min-width: 750px) {
      width: 50%;
      margin: 0 auto;
    }
    
    @media (min-width: 1350px) {
      width: 100%;
    }

    &:hover {
      background-color: ${({ theme }) => theme["yellow-dark"]};
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`

export const CoffeeListPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;

    span {
      font-size: 1rem;
    }
  }

  .TotalPrice {
    font-size: 1.25rem;
    font-weight: 700;
  }
`
export const MoneyChangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  label {
    color: ${({ theme }) => theme["base-text"]};
  }
`

export const CheckboxRoot = styled(Checkbox.Root)`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme["base-hover"]};
  border-radius: 5px;
`

export const ChangeInputContainer = styled.div<ChangeError>`
  width: 100%;

  input {
    width: 100%;
    padding: 0.75rem;
    background-color: ${({ theme }) => theme["base-input"]};
    border: 1.5px solid ${({ theme, wrongValue }) => wrongValue ? "#D9042B" : theme["base-button"]};
    border-radius: 4px;
    margin-bottom: 1rem;
    outline: none;

    &:focus {
      outline: 1.5px solid ${({ theme }) => theme["yellow-dark"]};
    }

    ::placeholder {
      color: ${({ theme }) => theme["base-label"]};
    }
  }

  .changeError {
    color: #D9042B;
    font-size: 0.875rem;
  }
`