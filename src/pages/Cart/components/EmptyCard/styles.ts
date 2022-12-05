import styled from "styled-components";

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 2rem;
  padding: 2rem;
  background-color: ${({theme}) => theme["base-card"]};
  border-radius: 6px 44px;

  img {
    width: 50%;
    max-width: 300px;
  }

  P {
    font-weight: 700;
  }

  button {
    padding: 1rem;
    background-color: ${({theme}) => theme.yellow};
    font-size: 1rem;
    color: ${({theme}) => theme.white};
    border-radius: 6px;
  }
`