import styled from "styled-components";

export const OrderContainer = styled.section`
  padding: 2rem;

  @media (min-width: 750px) {
    padding: 2rem 5rem;
  }

  @media (min-width: 1350px) {
    padding: 2rem 10rem;
  }

  h2 {
    font-weight: 800;
    font-size: 1.5rem;
    color: ${({theme}) => theme["yellow-dark"]};

    @media (min-width: 750px) {
      font-size: 2rem
    }
  }

  .OrderSubtitle {
    color: ${({theme}) => theme["base-subtitle"]};
    margin: 0.25rem 0 2.5rem 0;

    @media (min-width: 750px) {
      font-size: 1.25rem;
    }
  }

  img {
    max-width: 492px;
  }
`

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1350px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const OrderStatus = styled.div`
  padding: 1rem;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box, linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%) border-box;
  border-radius: 6px 36px;
  flex: 1;
  margin-bottom: 4rem;
  max-width: 526px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 750px) {
    padding: 2.5rem;
  }
  @media (min-width: 1350px) {
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    p {
      line-height: 1.3;
    }

    span {
      font-weight: bold;
    }
    .change {
      display: block;
    }
  }
`