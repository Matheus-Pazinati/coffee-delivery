import styled from "styled-components";

export const BoughtCoffeeCardContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem 0;
  border-bottom: 1px solid ${({theme}) => theme["base-button"]};
  flex-wrap: wrap;

  .CoffeePrice {
    font-weight: 700;
    margin: 0.5rem 0 0 0.5rem;

    @media (min-width: 750px) {
      margin: 0;
    }
  }

`

export const BoughtCoffeeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  .CoffeeData {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p {
     color: ${({theme}) => theme["base-subtitle"]};
    }
  }

  .CoffeeButtons {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .CoffeeRemove {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${({theme}) => theme["base-button"]};
      text-transform: uppercase;
      font-size: 0.75rem;
      color: ${({theme}) => theme["base-text"]};

      &:hover {
        background-color: ${({theme}) => theme["base-hover"]};
      }
    }
  }
`