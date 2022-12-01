import styled from "styled-components";

export const CoffeeListContainer = styled.div`
  @media (min-width: 750px) {
    padding: 0 5rem;
  }
  @media (min-width: 1350px) {
    padding: 0;
    flex: 1;
  }
  
  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    padding-left: 2rem;
    margin-bottom: 1rem;
    margin-top: 2.5rem;

    @media (min-width: 750px) {
     padding-left: 0;
    }
  }
`

export const CoffeeListContent = styled.div`
  background-color: ${({theme}) => theme["base-card"]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;

  @media (min-width: 750px) {
     border-radius: 6px 44px;
     padding: 2.5rem;
  }

  .OrderConfirm {
    padding: 0.75rem;
    color: ${({theme}) => theme.white};
    background-color: ${({theme}) => theme.yellow};
    border-radius: 6px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.875rem;

    @media (min-width: 750px) {
      width: 50%;
      margin: 0 auto;
    }
    
    @media (min-width: 1350px) {
      width: 100%;
    }
  }
`

export const CoffeeListPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.875rem;

    span {
      font-size: 1rem;
    }
  }

  .TotalPrice {
    font-size: 1.25rem;
    font-weight: 700;
  }
`