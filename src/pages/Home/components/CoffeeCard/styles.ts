import styled from "styled-components";

export const CoffeeCardContainer = styled.li`
  background-color: ${({theme}) => theme["base-card"]};
  padding: 1rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1350px) {
    padding: 1.25rem;
  }

  label {
    margin: 0.75rem 0 1rem 0;
    padding: 0.25rem 0.5rem;
    background-color: ${({theme}) => theme["yellow-light"]};
    color: ${({theme}) => theme["yellow-dark"]};
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  img {
    margin-top: -2.5rem;
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

  .CoffeePrice {
    margin: 0;
    margin-right: 1.5rem;
    color: ${({theme}) => theme["base-text"]};
    span {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
    }
  }
`

export const CoffeeCardCartButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme["purple-dark"]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({theme}) => theme.purple};
  }
`