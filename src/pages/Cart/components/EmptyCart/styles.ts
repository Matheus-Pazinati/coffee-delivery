import styled from "styled-components";

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin: 2rem auto 0;
  padding: 2rem;
  background-color: ${({theme}) => theme["base-card"]};
  border-radius: 6px 44px;
  max-width: 740px;

  @media (min-width: 750px) {
    padding: 2rem 5rem;
  };  

  @media (min-width: 1350px) {
    padding: 2rem 10rem;
    gap: 2rem;
  };  

  img {
    width: 50%;
    max-width: 300px;
  }

  P {
    font-weight: 700;
    @media (min-width: 750px) {
      font-size: 1.5rem;
    }; 
  }

  a {
    padding: 1rem;
    background-color: ${({theme}) => theme.yellow};
    font-size: 1rem;
    color: ${({theme}) => theme.white};
    border-radius: 6px;

    &:hover {
      background-color: ${({theme}) => theme["yellow-dark"]};
    }

    @media (min-width: 750px) {
      font-size: 1.25rem;
    }; 
  }
`