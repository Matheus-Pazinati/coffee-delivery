import styled from 'styled-components'

export const MenuContainer = styled.section`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 750px) {
    padding: 2rem 5rem;
  }
  @media (min-width: 1350px) {
    padding: 2rem 10rem;
  }
`

export const CartContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div a {
    padding: 0.5rem;
    background-color: ${({theme}) => theme['yellow-light']};
    color: ${({theme}) => theme['yellow-dark']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${({theme}) => theme.yellow};
    }
  }
`

export const LocationContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  padding: 0.625rem 0.5rem;
  background-color: ${({theme}) => theme['purple-light']};
  cursor: pointer;

  span {
    font-size: 0.875rem;
    color: ${({theme}) => theme['purple-dark']};

    &:hover {
      color: ${({theme}) => theme.purple};
    }
}
`