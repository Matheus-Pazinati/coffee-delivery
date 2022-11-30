import styled from "styled-components";

export const CoffeeMenuContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;

  @media (min-width: 750px) {
    padding: 2rem 5rem;
  }
  @media (min-width: 1350px) {
    padding: 2rem 10rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${({theme}) => theme["base-subtitle"]};
  }
`

export const CoffeeItems = styled.ul`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
  }
`