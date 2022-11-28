import styled from "styled-components";

export const CoffeeCardContainer = styled.li`
  background-color: ${({theme}) => theme["base-card"]};
  padding: 1rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin: 0.75rem 0 1rem 0;
    padding: 0.25rem 0.5rem;
    background-color: ${({theme}) => theme["yellow-light"]};
    color: ${({theme}) => theme["yellow-dark"]};
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({theme}) => theme["base-subtitle"]};
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${({theme}) => theme["base-label"]};
    line-height: 1.3;
    margin: 0.5rem 0 2rem 0;
  }
`

export const CoffeeCardBuy = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
    color: ${({theme}) => theme["base-text"]};
    span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }


`

export const CoffeeCardQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme["base-button"]};
  margin: 0 0.5rem 0 1rem;

  button {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    width: 1rem;
    color: ${({theme}) => theme.purple};
    cursor: pointer;

    &:hover {
      color: ${({theme}) => theme["purple-dark"]};
    }
  }

  span {
    color: ${({theme}) => theme["base-title"]};
  }
`

export const CoffeeCardCartButton = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme["purple-dark"]};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.purple};
  }
`