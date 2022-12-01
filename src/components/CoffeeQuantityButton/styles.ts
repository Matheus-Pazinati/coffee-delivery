import styled from "styled-components";

export const CoffeeCardQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme["base-button"]};
  margin: 0 0.5rem 0 1rem;
  max-width: 4.5rem;

  button {
    background-color: transparent;
    color: ${({theme}) => theme.purple};

    &:hover {
      color: ${({theme}) => theme["purple-dark"]};
    }
  }

  input {
    color: ${({theme}) => theme["base-title"]};
    background-color: transparent;
    font-size: 1rem;
    width: 1.25rem;
    outline: none;
    text-align: center;
  }
`