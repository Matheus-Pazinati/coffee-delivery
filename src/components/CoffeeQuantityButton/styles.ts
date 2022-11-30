import styled from "styled-components";

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

  input {
    color: ${({theme}) => theme["base-title"]};
    border: none;
    background-color: transparent;
    max-width: 1.25rem;
    outline: none;
    text-align: center;
  }
`