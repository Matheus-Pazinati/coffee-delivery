import styled from "styled-components";

export const CartContainer = styled.main`
  @media (min-width: 1350px) {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding: 0 10rem;
    max-width: 1500px;
    margin: 0 auto;
  };  
`

export const FormTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  padding-left: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 750px) {
    padding-left: 0;
  }
`