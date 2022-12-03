import styled from "styled-components";

export const OrderContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

export const OrderContent = styled.div`
  margin-bottom: 4rem;

  h2 {
    font-weight: 800;
    font-size: 1.5rem;
    color: ${({theme}) => theme["yellow-dark"]};
  }

  .OrderSubtitle {
    color: ${({theme}) => theme["base-subtitle"]};
    margin: 0.25rem 0 2.5rem 0;
  }
`

export const OrderStatus = styled.div`
  padding: 1rem;
  border: 1px solid transparent;
  background: linear-gradient(white, white) padding-box, linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%) border-box;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

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
  }
`



