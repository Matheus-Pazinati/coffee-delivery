import styled from "styled-components";

export const CoffeeCardQuantity = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme["base-button"]};
  max-width: 4.5rem;

  button {
    background-color: transparent;
    color: ${({theme}) => theme.purple};
    &:hover {
      color: ${({theme}) => theme["purple-dark"]};
    }
  }

  span {
    color: ${({theme}) => theme["base-title"]};
    font-size: 1rem;
    text-align: center;
    padding: 0 0.25rem;
  }
`