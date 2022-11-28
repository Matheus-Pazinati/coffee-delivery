import styled from "styled-components";

export const CoffeeMenuContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${({theme}) => theme["base-subtitle"]};
  }
`

export const CoffeeList = styled.ul`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`